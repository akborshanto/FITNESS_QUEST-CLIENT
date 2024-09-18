import React from 'react';
import useAxiosSecure from '../AxiosSecure/AxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAppliedNew = () => {
  const axiosSecure = useAxiosSecure();

  const { data: pendingTrainer, isLoading, refetch, error } = useQuery({
    queryKey: ['pending-trainer'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/fitness/pending-trainer');
      return data;
    },
  });

  return { pendingTrainer, isLoading, refetch, error };
};

export default useAppliedNew;
