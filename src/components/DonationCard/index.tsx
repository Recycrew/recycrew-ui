import { useUserContext } from '../../context/UserContext';

export interface Donator {
  id: number;
  name: string;
  password: string;
  email: string;
  document_type: string;
  document_number: string;
  address: string;
  is_collector: boolean;
}

export interface Donation {
  donor: Donator;
  description: string;
  id: number;
  material: string;
}

interface DonationCardProps {
  donation: Donation;
  onDelete: (donation: Donation) => Promise<void>;
  onPickCollect: (id: number) => Promise<void>;
}

const DonationCard = ({
  donation,
  onDelete,
  onPickCollect
}: DonationCardProps) => {
  const { user } = useUserContext();
  const { description, donor: donator, material, id } = donation;

  return (
    <div className="relative mx-auto mb-10 max-w-full bg-white px-4 py-6 shadow sm:max-w-xl sm:rounded-lg sm:p-6">
      {user?.name === donator?.name && (
        <span
          className={
            'absolute top-5 right-10 cursor-pointer rounded-full bg-red-600 px-2  font-bold text-white '
          }
          onClick={onDelete.bind({}, donation)}>
          X
        </span>
      )}
      {user?.is_collector && user?.name !== donator?.name && (
        <div
          className="absolute top-5 right-10 cursor-pointer rounded-md bg-green-600 px-5 py-2 font-bold text-white"
          onClick={onPickCollect.bind({}, id)}>
          PEGAR
        </div>
      )}
      <div className="flex items-start space-x-4">
        <div className="min-w-0 flex-1">
          <div>Descrição: {description}</div>
          <div>
            Tipo: {material.slice(0, 1).toUpperCase() + material.slice(1)}
          </div>
          <div>Solicitante: {donator?.name}</div>
          <div>Endereço: {donator?.address}</div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
