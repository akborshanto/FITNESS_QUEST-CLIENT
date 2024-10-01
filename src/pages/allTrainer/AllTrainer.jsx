import React from 'react'
import AllTrainerCad from './AllTrainerCad'

import UseTitle from './../../hook/useTitle';
import useAxiosSecure from '../../AxiosSecure/AxiosSecure';
import useAuth from '../../auth/Auth';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useAxiosAdmin from '../../hook/useAxiosAdmin';

const AllTrainer = () => {
const {user}=useAuth()

const useAxios=useAxiosAdmin()

  // const axiosSecure=useAxiosSecure()
  const { data: trainers, isLoading, refetch, error } = useQuery({
    queryKey: ['trainera'],
    queryFn: async () => {
      const { data } = await useAxios.get('/fitness/allTrainerNew');
      return data; // Ensure that data is returned here
    },
  });
  
  

  return (

<div> 
<div className=" pt-10 md:pt-0  max-w-7xl md:px-10 px-2 pb-10 mx-auto ">
<Helmet>
  <title>Finess Quest - Trainers</title>
</Helmet>
<div className="container m-auto">
  <div className="relative lg:py-28 md:py-16 py-10 w-full space-y-4">
    <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
      Meet our
      <span className="text-[#007BFF]"> trainers</span>.
    </h1>
  </div>

  {isLoading ? (
    <div className=" w-full flex items-center justify-center">
      {" "}

    </div>
  ) : (
    
    <div className="grid  lg:grid-cols-2 grid-cols-1 gap-3 ">
      {trainers?.map((trainer) => (
        <Link to={`/trainer/${trainer._id}`} className="cursor-default" key={trainer._id}>
          <div className="h-52  shadow-black border border-gray-400/15 shadow-sm p-2 group rounded-[15px] overflow-hidden">
            <div className="h-full flex gap-3">
              <Link
                to={`/trainer/${trainer._id}`}
                className="overflow-hidden h-full w-[200px] rounded-[10px]"
              >
                <img
                  src={trainer?.image}
                  alt={trainer?.name}
                  className="h-full w-full group-hover:scale-110 duration-500 object-cover object-top cursor-pointer"
                />
              </Link>
              <div className="text-white flex-1 md:space-y-2 space-y-1">
                <div className="flex justify-between w-full relative">
                  <h2 className="text-2xl">{trainer?.name}</h2>
                  <div className="absolute right-0 ">
                    <p className="bg-yellow-500/5 border border-gray-700/15 text-xs font-bold   px-2 py-1 rounded-full">
                      Ex- {trainer?.experience}+ Year
                    </p>
                  </div>
                </div>
                <div>
                  <p className="capitalize font-bold text-sm text-gray-300">
                    expertise :
                  </p>
                  <div className="flex flex-wrap gap-1">
             {trainer?.skill?.slice(0,3)
                 
                      .map((specialty, index) => (
                        <p
                          key={index}
                          className="md:text-sm text-[8px] font-bold bg-white text-gray-600 px-2 mt-1 rounded-full border border-gray-500/15 "
                        >
                          {specialty?.label}
                        </p>
                      ))} 
                        {console.log(trainer.image)}
                  </div>
                </div>
        {trainer?.day?.length !== 0 ? (
                  <div>
                    <p className="capitalize font-bold text-sm text-gray-300">
                      Available slots :-
                    </p>
                    <div className="flex flex-col flex-wrap gap-[2px]">
                      {trainer.day.slice(0, 3).map((slot, index) => (
                        <Link
                          to={`/trainerbooking?id=${trainer._id}&slot=${slot.name}`}
                          key={index}
                          className="md:text-xs text-[10px]   cursor-pointer  border bg-[#007BFF]/30 font-bold   hover:bg-transparent hover:text-[#007BFF] duration-500 text-white py-[2px] px-2 mt-1 rounded-full  border-gray-500/15 "
                        >
                          {slot?.labe} - {slot?.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="capitalize font-bold text-sm text-gray-300">
                      No slot available
                    </p>
              
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )}
</div>
</div>

</div>


  )
}

export default AllTrainer
