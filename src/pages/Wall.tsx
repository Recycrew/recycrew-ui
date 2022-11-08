/* eslint-disable prettier/prettier */

import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostForm } from '../components';
import DonationCard, { Donation } from '../components/DonationCard';
import { useUserContext } from '../context/UserContext';
import usePromise from '../hooks/promise';
import { apiService } from '../service/api';
export interface ICollects {
  id: number;
  description: string;
  type: string;
  responsible?: string;
  colector?: string;
}

export interface Collector {
  id: number;
  name: string;
  password: string;
  email: string;
  document_type: string;
  document_number: string;
  address: string;
  is_collector: boolean;
}

const Wall = () => {
  const [donations, setDonations] = usePromise<Donation[]>(
    () => apiService.get('/donation'),
    []
  );

  const [collects] = usePromise<{ donation: Donation; collector: Collector }[]>(
    () => apiService.get('/collection'),
    []
  );

  const donationsWithoutCollects = useMemo(() => {
    const collectsDonationsIds = collects?.map(
      (collect) => collect.donation.id
    );
    return donations?.filter(
      (donation) => !collectsDonationsIds?.includes(donation.id)
    );
  }, [donations, collects]);

  document.body.style.background = '#f3f4f6';
  const { user } = useUserContext();
  const navigate = useNavigate();

  const handleCollect = async (id: number) => {
    if (!user || !user?.is_collector) return;

    try {
      await apiService.post('/collection/create', {
        donationId: id,
        collectorId: user?.id
      });
    } catch (error) {
      console.error('Não foi possível criar essa coleta!');
    } finally {
      setDonations((previousCollection) =>
        previousCollection?.filter(
          (currentDonation) => currentDonation.id !== id
        )
      );
    }
  };

  const handleDeleteDonation = async (donation: Donation) => {
    await apiService.delete(`/donation/delete/${donation.id}`);

    setDonations((previousCollection) =>
      previousCollection?.filter(
        (currentDonation) => currentDonation.id !== donation.id
      )
    );
  };

  const createDonation = async (material: string, description: string) => {
    const donation = await apiService.post('/donation/create', {
      donorId: user?.id,
      material: material.toUpperCase(),
      description
    });

    console.log(donation);

    setDonations((donations) => {
      if (!Array.isArray(donations)) return;
      return [...donations, { ...donation, donor: { name: user?.name } }];
    });
  };

  useEffect(() => {
    if (user?.name) return;

    navigate('/');
  }, [user?.name]);

  return (
    <div className="my-8">
      <PostForm onCreateDonation={createDonation} />
      {donationsWithoutCollects?.map((donation: Donation) => (
        <DonationCard
          key={String(donation.id)}
          donation={donation}
          onDelete={handleDeleteDonation}
          onPickCollect={handleCollect}
        />
      ))}
    </div>
  );
};

export default Wall;
