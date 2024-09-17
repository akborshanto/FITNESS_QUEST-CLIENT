import React from 'react'
import useAxiosSecure from '../AxiosSecure/AxiosSecure'
import { useQuery } from '@tanstack/react-query'

const useBecomeTrainerNew = () => {
const axiosSecure=useAxiosSecure()
const {data:classFitness =[],refetch,isLoading}=useQuery({

    queryKey:['classFitness'],
    queryFn:async ()=>{

const {data}=await axiosSecure.get('/fitness/classFitness')


return data

    }


})


  return [classFitness]
}

export default useBecomeTrainerNew