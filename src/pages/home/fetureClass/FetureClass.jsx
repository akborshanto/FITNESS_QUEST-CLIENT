import React from 'react'
import Card from '../../../component/cardHome/Card'
import useAxiosSecure from '../../../AxiosSecure/AxiosSecure'
import { useQuery } from '@tanstack/react-query';

const FetureClass = () => {
const axiosSecure=useAxiosSecure()



/* useQuery */
const {data}=useQuery({
  queryKey:['fetureclass'],
  queryFn:async ()=>{
const {data}=await axiosSecure.get('/trainer-booking')
return data

  }
})
console.log(data)






  return (
    <div className='my-8'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>






{
  data?.slice(3,9).map((feture)=>{
return (

  <div key={ Math.random()} className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
  <div className="p-6">
  <h1>{feture.classs}</h1>
    <h3 className="mb-4 text-xl font-medium text-slate-700">
   Total Booking:
    </h3>
    <h3>Packages:{feture.packages}</h3>
    <p>
      Description:
    </p>
    
  </div>
</div>



)

  })






}




    </div>
    </div>
  )
}

export default FetureClass
