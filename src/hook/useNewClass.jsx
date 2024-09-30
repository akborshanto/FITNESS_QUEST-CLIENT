import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { axiosSecure } from './../AxiosSecure/AxiosSecure';

export const useNewClass = () => {
    const { data: newClass , isLoading, refetch, error } = useQuery({
        queryKey: ['new-class'],
        queryFn: async () => {
          const { data } = await axiosSecure.get('/fitness/new-class');

          return data;
        },
      });
    
  return {newClass,isLoading,refetch,error}
 
}