import React from 'react'
import useAxiosSecure from '../../../../AxiosSecure/AxiosSecure'
import { useQuery } from '@tanstack/react-query';

const NewsLetterAdmin = () => {
const axiosSecure=useAxiosSecure()
/* tenstack */
const {data,refetch}=useQuery({
  queryKey:['newsLeter'],
  queryFn:async ()=>{

    const {data}=await axiosSecure.get('/news-letter')
return data
  }
})



  return (
    <div className='text-center'>
      NEWS LETTER



      <div className="w-full overflow-x-auto">
      <table className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200" cellspacing="0">
        <tbody>
          <tr>
            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Name</th>
            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Email</th>
  
          </tr>
  
{

  data?.map(news=>{return (

    <tr>
    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{news?.name}</td>
    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{news?.email}</td>
    </tr>
  )})
}

           
    
        </tbody>
      </table>
    </div>
   



    </div>
  )
}

export default NewsLetterAdmin
