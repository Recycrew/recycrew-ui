import { useEffect, useReducer } from 'react';
import { Button } from '..';
import { useUserContext } from '../../context/UserContext';
import { ICollects } from '../../pages/Wall';

interface IAction {
  payload: string;
  name: string;
}

const initialState = {
  description: '',
  type: ''
};

interface IPostForm {
  setCollection: React.Dispatch<React.SetStateAction<ICollects[]>>;
}

const formReducer = (state: any, action: IAction) => {
  const form: any = {
    description: () => ({ ...state, description: action.payload }),
    type: () => ({ ...state, type: action.payload })
  };

  return form[action.name]() || state;
};

const PostForm = ({ setCollection }: IPostForm) => {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const { userName } = useUserContext();

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    if (value === '0') return;
    dispatch({ name, payload: value });
  };

  useEffect(() => console.log(formState), [formState]);

  const handlePost = async (event: any) => {
    event.preventDefault();
    if (!formState.description || !formState.type) return;
    if (formState.description.length <= 5) return;

    const newCollect = {
      ...formState,
      responsible: userName,
      colector: ''
    };

    const response = await fetch('http://localhost:4000/coletas', {
      method: 'POST',
      body: JSON.stringify(newCollect),
      headers: new Headers({ 'content-type': 'application/json' })
    });

    const collect = await response.json();

    setCollection((prevCollection) => [
      ...prevCollection,
      {
        ...collect
      }
    ]);
  };

  return (
    <div className="mx-auto mb-10 max-w-full bg-white px-4 py-6 shadow sm:max-w-xl sm:rounded-lg sm:p-6">
      <div className="flex items-start space-x-4">
        <div className="min-w-0 flex-1">
          <div className="border-b border-gray-200 focus-within:border-primary">
            <textarea
              rows={6}
              name="description"
              id="content"
              className="text-md block w-full  border-b p-0 pb-2 focus:outline-none"
              placeholder="Deseja procurar um coletor para buscar seus recicláveis? Poste por aqui e um dos nossos coletores parceiros irão te contactar!"
              maxLength={1000}
              onChange={handleChange}
              value={formState.description}
            />
            <div className="mt-8 flex justify-center">
              <div className="mb-3 xl:w-96">
                <select
                  name="type"
                  className="form-select block
                            w-full
                            appearance-none
                            rounded
                            border
                            border-solid
                            border-gray-300
                            bg-white
                            bg-clip-padding bg-no-repeat px-3
                            py-1.5 text-base font-normal
                            text-gray-700
                            transition
                            ease-in-out
                            focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  aria-label="Default select example"
                  onChange={handleChange}
                  value={formState.type}>
                  <option value="0">Selecione uma opção</option>
                  <option value="vidro">Vidro</option>
                  <option value="plastico">Plástico</option>
                  <option value="ferro">Ferro</option>
                  <option value="eletronico">Eletronico</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <div className="flex items-center space-x-5"></div>
            <div className="flex-shrink-0">
              <Button
                title="Postar"
                type="primary"
                onClick={handlePost}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
