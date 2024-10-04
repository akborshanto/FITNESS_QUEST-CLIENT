import { useQuery } from '@tanstack/react-query'
import React, { createContext } from 'react'
import { axiosSecure } from '../AxiosSecure/AxiosSecure'

export const paymentContext=createContext()

const usePayment = ({children}) => {
    const {data,isLoading}=useQuery({
        queryKey:['trainer-detail'],
        queryFn:async ()=>{
      
            const {data}=await axiosSecure.get(`/fitness/single-slot-id/${id}`)
      
            return data
        }
      })

  return (
    <div>
    
    
    
    {children}</div>
  )
}

export default usePayment