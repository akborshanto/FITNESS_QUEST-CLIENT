import React, { useEffect, useState } from 'react'
// import TrainerDetailCard from './TrainerDetailCard'
import Be_A_Trainer from './Be A Trainer/Be_A_Trainer'
import { useParams } from 'react-router-dom'
import useAxiosSecure from '../../../AxiosSecure/AxiosSecure'
import { useQuery } from '@tanstack/react-query'
import useAuth from './../../../auth/Auth';

const TrainerDetail = () => {
  const axiosSecure=useAxiosSecure()

  const  {id}=useParams()

const{user}=useAuth()
//consolelog(id)
  const {data}=useQuery({
    queryKey:['trainer-detail'],
    queryFn:async ()=>{

        const {data}=await axiosSecure.get(`/fitness/single-slot-id/${id}`)

        return data
    }
})
  const {data:manageSlot,isLoading}=useQuery({
    queryKey:['trainer-slot'],
    queryFn:async ()=>{

        const {data}=await axiosSecure.get(`/fitness/manage-slots/${user?.email}`)

        return data
    }
})



  return (
    <div className='my-8'>

{/* Trainer Detail card */}
{<TrainerDetailCard tDetail={data} manageSlot={manageSlot} isLoading={isLoading}></TrainerDetailCard>
}
{/* <Be_A_Trainer></Be_A_Trainer>
     */}
    </div>
  )
}

export default TrainerDetail
