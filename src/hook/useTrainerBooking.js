import React from 'react'
import useAxiosSecure from '../AxiosSecure/AxiosSecure'
import { useQuery } from '@tanstack/react-query'

const useTrainerBooking = () => {
    const axiosSecure=useAxiosSecure()
    const {data: allTrainerClass,refetch,isLoading}=useQuery({
        queryKey:['trainerClassBOoking'],
        queryFn:async()=>{
const {data}= await axiosSecure.get('/trainer-booking')
console.log(data)
return data

        }
    })
  return (
  [allTrainerClass]


  )
}

export default useTrainerBooking
