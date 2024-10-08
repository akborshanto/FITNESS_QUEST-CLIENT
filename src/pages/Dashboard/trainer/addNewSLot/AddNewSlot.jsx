import React from 'react'
import { Select } from '@chakra-ui/react';
// import UseButton from './../../../../component/button/Button';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../auth/Auth';
import useAxiosSecure from '../../../../AxiosSecure/AxiosSecure';
import AddNewSlotForm from './AddNewSlotForm';
import UseTitle from '../../../../hook/useTitle';

const AddNewSlot = () => {
const {user}=useAuth()
const axiosSecure=useAxiosSecure()


const {data}=useQuery({
  queryKey:['addNewSlot',user?.email],

queryFn:async()=>{

  const {data}=await axiosSecure.get(`/addNewSlotTrainer/${user?.email}`)
    //consolelog(data)
    return data
}

})



const handleSubmit=(e)=>{
  //consolelog("dsf")
}

  return (
    <div>
    <UseTitle heading="ADD A NEW SLOT"></UseTitle>
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md text-black">
    <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
      Account settings
    </h2>

{
    data?.map(newSlot=><AddNewSlotForm newSlot={newSlot} handleSubmit={handleSubmit}></AddNewSlotForm>)}
  </section>
    </div>
  )
}

export default AddNewSlot
