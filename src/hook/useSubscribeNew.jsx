import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { axiosSecure } from '../AxiosSecure/AxiosSecure';

const useSubscribeNew = () => {
    const { data: subscriber , isLoading, refetch, error } = useQuery({
        queryKey: ['subscibers'],
        queryFn: async () => {
          const { data } = await axiosSecure.get('/fitness/subscibers');
        console.log(data)
          return data;
        },
      });
    
  return {subscriber,isLoading,refetch,error}
}

export default useSubscribeNew