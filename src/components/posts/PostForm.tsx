import { FC, useState } from 'react';
import { Button } from '..';

const PostForm: FC = () => {
  const [content, setContent] = useState('');

  return (
    <div className="mx-auto mb-10 max-w-full bg-white px-4 py-6 shadow sm:max-w-xl sm:rounded-lg sm:p-6">
      <div className="flex items-start space-x-4">
        <div className="min-w-0 flex-1">
          <div className="border-b border-gray-200 focus-within:border-primary">
            <textarea
              rows={6}
              name="content"
              id="content"
              className="text-md block w-full border-0 border-b border-transparent p-0 pb-2 focus:outline-none"
              placeholder="Deseja procurar um coletor para buscar seus recicláveis? Poste por aqui e um dos nossos coletores parceiros irão te contactar!"
              maxLength={1000}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="flex justify-between pt-4">
            <div className="flex items-center space-x-5"></div>
            <div className="flex-shrink-0">
              <Button title="Postar" type="primary"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
