import React, { useEffect } from 'react'
import TrainerDetailCard from './TrainerDetailCard'
import Be_A_Trainer from './Be A Trainer/Be_A_Trainer'
import { useParams } from 'react-router-dom'
import useAxiosSecure from '../../../AxiosSecure/AxiosSecure'

const TrainerDetail = () => {
  const axiosSecure=useAxiosSecure()

  const  {id}=useParams()
console.log(id)
useEffect(()=>{

( async ()=>{

  const res= await axiosSecure.get(`/trainer-detail/${id}`)
  console.log(res)
    
})()
  },[])

  return (
    <div className='my-8'>

{/* Trainer Detail card */}
<TrainerDetailCard></TrainerDetailCard>
<Be_A_Trainer></Be_A_Trainer>
    
    </div>
  )
}

export default TrainerDetail
