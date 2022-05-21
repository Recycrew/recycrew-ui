import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostForm } from '../components';
import { useUserContext } from '../context/UserContext';
export interface ICollects {
  id: number;
  description: string;
  type: string;
  responsible?: string;
  colector?: string;
}

const Wall = () => {
  document.body.style.background = '#f3f4f6';
  const [collects, setCollects] = useState<ICollects[]>([]);
  const { userName } = useUserContext();
  const navigate = useNavigate();

  const handleClick = async (collect: ICollects) => {
    if (collect.responsible === userName) return;

    const response = await fetch(
      `http://localhost:4000/coletas/${collect.id}`,
      {
        method: 'PUT',
        body: JSON.stringify({ ...collect, colector: userName }),
        headers: new Headers({ 'content-type': 'application/json' })
      }
    );

    const updatedCollect = await response.json();

    setCollects((previousCollection) =>
      previousCollection.map((currentCollect) =>
        currentCollect.id === collect.id ? updatedCollect : currentCollect
      )
    );
  };

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:4000/coletas');
      const coletas = await response.json();

      setCollects(coletas);
    })();
  }, []);

  useEffect(() => {
    if (userName) return;

    navigate('/');
  }, [userName]);

  return (
    <div className="my-8">
      <PostForm setCollection={setCollects} />
      {collects.map((collect) => (
        <div
          key={collect.id}
          className="mx-auto mb-10 max-w-full bg-white px-4 py-6 shadow sm:max-w-xl sm:rounded-lg sm:p-6"
          onClick={() => handleClick(collect)}
          style={
            collect.colector
              ? { backgroundColor: '#73ba91', color: 'white' }
              : {}
          }>
          <div className="flex items-start space-x-4">
            <div className="min-w-0 flex-1">
              <div>Descrição: {collect.description}</div>
              <div>
                Tipo:{' '}
                {collect.type.slice(0, 1).toUpperCase() + collect.type.slice(1)}
              </div>
              <div>Solicitante: {collect.responsible}</div>
              <div>
                Coletor:{' '}
                {collect.colector
                  ? collect.colector
                  : 'Ainda não foi selecionado por um coletor'}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wall;
