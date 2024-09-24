import React from 'react'
import useAxiosSecure from '../AxiosSecure/AxiosSecure';

const useAllTrainerNew = () => {
const axiosSecure=useAxiosSecure()
    const { data: trainers, isLoading, refetch, error } = useQuery({
        queryKey: ['trainer'],
        queryFn: async () => {
          const { data } = await axiosSecure.get('/fitness/allTrainerNew');
          return data; // Ensure that data is returned here
        },
      });
  return (
{trainers,isLoading,refetch,error}
  )
}

export default useAllTrainerNew