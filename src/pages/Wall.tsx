/* eslint-disable prettier/prettier */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostForm } from '../components';
import { useUserContext } from '../context/UserContext';
import { apiService } from '../service/api';
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

    const updatedCollect = await apiService.put(`/coletas/${collect.id}`, { ...collect, colector: userName });

    setCollects((previousCollection) =>
      previousCollection.map((currentCollect) =>
        currentCollect.id === collect.id ? updatedCollect : currentCollect
      )
    );
  };

  const handleExitCollectOrder = async (collect: ICollects) => {
    await apiService.delete(`/coletas/${collect.id}`);

    setCollects((previousCollection) =>
      previousCollection.filter((currentCollect) =>
        currentCollect.id !== collect.id
      )
    );
  }

  useEffect(() => {
    (async () => {
      const coletas = await apiService.get('/coletas');
      console.log(coletas);
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
              ? { backgroundColor: '#73ba91', color: 'white', position: 'relative'}
              : {position: 'relative'}
          }>
          {collect.responsible === userName && <span style={{ position: 'absolute', top: 5, right: 10, color: collect.colector ? 'white': 'black', cursor: 'pointer'}} onClick={() => handleExitCollectOrder(collect)}>X</span>}
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
