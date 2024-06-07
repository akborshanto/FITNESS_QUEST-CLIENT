import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../AxiosSecure/AxiosSecure'
import { useParams } from 'react-router-dom'

const ComunityDetail = () => {
    const axiosSecure=useAxiosSecure()
    const {id}=useParams()
    
const {data}=useQuery({
    queryKey:['singleComunity'],
    queryFn:async ()=>{

        const {data}=await axiosSecure.get(`/forums/${id}`)
        console.log(data)
        return data
    }
})


  return (
    <div>
    <div class="max-w-screen-lg mx-auto">
  
  
    <main class="mt-10">

      <div class="mb-4 md:mb-0 w-full mx-auto relative">
        <div class="px-4 lg:px-0">
          <h2 class="text-4xl font-semibold text-gray-800 leading-tight text-3xl">
          {data?.classs}
          </h2>
   
     
        </div>

        <img src={data?.userInfo.photo} class="w-full object-cover lg:rounded" />
      </div>

      <div class="flex flex-col lg:flex-row lg:space-x-12">

        <div class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
          <p class="pb-6">{data?.aritcle}.</p>

       
        </div>

        <div class="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
          <div class="p-4 border-t border-b md:border md:rounded">
            <div class="flex py-2">
              <img src={data.userInfo.photo}
                class="h-10 w-10 rounded-full mr-2 object-cover" />
              <div>
               <p class="font-semibold text-gray-600 text-xs"> {data?.userInfo.name} </p>
                <p class="font-semibold text-gray-600 text-xs"> {data?.userInfo?.role} </p>
              </div>
            </div>
            <p class="text-gray-700 py-3">
              Mike writes about technology
              Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.
            </p>
            <button class="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
              Follow 
              <i class='bx bx-user-plus ml-2' ></i>
            </button>
          </div>
        </div>

      </div>
    </main>

  </div>


    </div>
  )
}

export default ComunityDetail
