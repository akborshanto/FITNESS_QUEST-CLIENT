import React from 'react'
import useAxiosSecure from '../../AxiosSecure/AxiosSecure'
import { useQuery } from '@tanstack/react-query';
import ComunityCard from './CounityCard';

const Comunity = () => {
const axiosSecure= useAxiosSecure()


/* use tanstck */
const {data,refetch}=useQuery({


  queryKey:['forum'],
  queryFn:async ()=>{

const {data}=await axiosSecure.get('/become-trainer')
return data
  }
})


  return (

    <div className='mt-6'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>



    {
      data?.map(forum=> <ComunityCard></ComunityCard>)
    }
    
    
    
        </div>
    </div>

  )
}

export default Comunity
