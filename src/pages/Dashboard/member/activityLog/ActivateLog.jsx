import React from 'react'

import ActivityTaable from './ActivityTaable'
import { FaEye, FaRegEye } from "react-icons/fa";

// import UseButton from '../../../../component/button/Button';
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import useAppliedNew from '../../../../hook/useAppliedNew';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../../AxiosSecure/AxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../auth/Auth';
import { ImCross } from 'react-icons/im';
const ActivateLog = () => {
const {user}=useAuth()

  // const { isOpen, onOpen, onClose } = useDisclosure()

  const axiosSecure=useAxiosSecure()

const toggleModal=()=>{}

  const {data:singleApplied =[],refetch,isLoading}=useQuery({
  
      queryKey:['singlePending'],
      queryFn:async ()=>{
  
  const {data}=await axiosSecure.get(`/fitness/pending-single-trainers/${user?.email}`)
  
  
  return data
  
      }
  
  
  })
   


  return (
    <div>
    
    <h2 className="text-4xl text-center font-semibold mb-4 text-white">
      Activity log
    </h2>
    <Helmet>
      <title>Workout - Activity log</title>
    </Helmet>
    <div>
      {singleApplied ? (
        <div>
          <div className="w-full bg-white rounded-2xl px-6 py-5 flex lg:flex-row flex-col justify-between items-center relative">
            <div className="flex gap-4 items-center lg:flex-row flex-col ">
              <img
                src={singleApplied?.image}
                alt=""
                className="h-16 rounded-full"
              />
              <h1 className="text-black">{singleApplied?.name}</h1>
            </div>
            <h1 className="text-base  text-black">Applied for became a trainer</h1>
            <div className=" flex items-center gap-4"> 

             <h1 className="bg-[#eeeb48d3] rounded-full px-5  py-2 text-black"> Pending</h1>
                      <MdDelete className="text-black text-2xl cursor-pointer" />
            </div>

            <button
              onClick={() => handledelete(singleApplied._id)}
              className="absolute right-3 top-3 "
            >

            </button>
          </div>
      
        </div>
      ) : (
        <h2 className="text-2xl text-center font-semibold mb-4 text-white uppercase">
          you did not applied yet
        </h2>
      )}
    </div>
  </div>
  )
}

export default ActivateLog
