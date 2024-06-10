import React, { useEffect, useState } from 'react'
import TrainerDetailCard from './TrainerDetailCard'
import Be_A_Trainer from './Be A Trainer/Be_A_Trainer'
import { useParams } from 'react-router-dom'
import useAxiosSecure from '../../../AxiosSecure/AxiosSecure'

const TrainerDetail = () => {
  const axiosSecure=useAxiosSecure()
const [trainerDetail,setTrainerDetail]=useState({})
  const  {id}=useParams()
console.log(id)
useEffect(()=>{

( async ()=>{

  const res= await axiosSecure.get(`/trainer-detail/${id}`)
setTrainerDetail(res.data)
    
})()
  },[])
console.log(trainerDetail)
  return (
    <div className='my-8'>

{/* Trainer Detail card */}
<TrainerDetailCard tDetail={trainerDetail}></TrainerDetailCard>
<Be_A_Trainer></Be_A_Trainer>
    
    </div>
  )
}

export default TrainerDetail
