import { Donation } from '../components/DonationCard';
import { useUserContext } from '../context/UserContext';
import usePromise from '../hooks/promise';
import { apiService } from '../service/api';

interface Collection {
  donation: Donation;
  id: number;
}

const CollectsWall = () => {
  const { user } = useUserContext();
  const [collections, setCollections] = usePromise<Collection[]>(
    () => apiService.get('/collection/' + user?.id),
    [user?.id]
  );

  const handleGiveUpCollect = async (id: number) => {
    await apiService.delete('/collection/delete/' + id);

    setCollections((prevCollections) =>
      prevCollections?.filter((collection) => collection.id !== id)
    );
  };

  return (
    <div className="mt-5 flex flex-col items-center gap-5 px-5 ">
      {collections?.map((collect) => (
        <div
          key={collect?.id}
          className="relative mx-auto w-full rounded-md bg-green-300 p-5">
          <span
            className="absolute right-2 top-2 cursor-pointer rounded-md bg-red-400 px-2 font-bold text-white"
            onClick={() => handleGiveUpCollect(collect.id)}>
            DESISTIR DA COLETA
          </span>
          <div>Descrição: {collect?.donation.description}</div>
          <div>Endereço: {collect.donation.donor.address}</div>
          <div>Doador: {collect.donation.donor.name}</div>
          <div>Material: {collect.donation.material}</div>
        </div>
      ))}
    </div>
  );
};

export default CollectsWall;
