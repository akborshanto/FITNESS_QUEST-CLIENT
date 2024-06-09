import React from 'react'
import AllCassCard from './AllCassCard'
import useAllTrainer from '../../hook/useAllTrainer'
import useAxiosSecure from '../../AxiosSecure/AxiosSecure'
import { useQuery } from '@tanstack/react-query'

const AllClassPage = () => {
  const axiosSecure=useAxiosSecure()



  /* useQuery */
  const {data}=useQuery({
    queryKey:['fetureclass'],
    queryFn:async ()=>{
  const {data}=await axiosSecure.get('/addnewClassAdmin')
  return data
  
    }
  })
 // console.log(data)
  
  


  return (
    <div>
      ALL CLASSS

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6' >
{
  data?.map(addNewClassAdmin=>     <AllCassCard key={Math.random()} addNewClassAdmin={addNewClassAdmin}></AllCassCard>)
}

</div>


 
    </div>
  )
}

export default AllClassPage
