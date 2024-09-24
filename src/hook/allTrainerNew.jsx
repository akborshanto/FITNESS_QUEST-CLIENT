import React from 'react'
import useAxiosSecure from '../AxiosSecure/AxiosSecure';

export const allTrainerNew = () => {


    const axiosSecure=useAxiosSecure()
    const { data: allTrainer , isLoading, refetch, error } = useQuery({
        queryKey: ['allTrainer'],
        queryFn: async () => {
          const { data } = await axiosSecure.get('/fitness/allTrainer');
        // console.log(data)
          return data;
        },
      });
  return {allTrainer,isLoading,refetch,error}
}
