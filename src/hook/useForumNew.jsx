import { useQuery } from '@tanstack/react-query';
import React from 'react'

export const useForumNew = () => {
    const { data: comunity , isLoading, refetch, error } = useQuery({
        queryKey: ['comunity'],
        queryFn: async () => {
          const { data } = await axiosSecure.get('/fitness/forumFitness');

          return data;
        },
      });
    
  return {comunity,isLoading,refetch,error}
 
}
