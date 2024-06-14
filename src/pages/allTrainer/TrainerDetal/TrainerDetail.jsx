import React, { useEffect, useState } from 'react'
import TrainerDetailCard from './TrainerDetailCard'
import Be_A_Trainer from './Be A Trainer/Be_A_Trainer'
import { useParams } from 'react-router-dom'
import useAxiosSecure from '../../../AxiosSecure/AxiosSecure'
import { useQuery } from '@tanstack/react-query'

const TrainerDetail = () => {
  const axiosSecure=useAxiosSecure()

  const  {id}=useParams()

console.log(id)
  const {data}=useQuery({
    queryKey:['trainer-detail'],
    queryFn:async ()=>{

        const {data}=await axiosSecure.get(`/singleTrainerData/${id}`)

        return data
    }
})





  return (
    <div className='my-8'>

{/* Trainer Detail card */}
<TrainerDetailCard tDetail={data}></TrainerDetailCard>

<Be_A_Trainer></Be_A_Trainer>
    
    </div>
  )
}

export default TrainerDetail
