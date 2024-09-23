import React, { useEffect, useState } from 'react'

import Tb from './Tb';


import Loading from './../../../../component/Loading/Loading';
import { axiosSecure } from '../../../../AxiosSecure/AxiosSecure';
import useSubscribeNew from '../../../../hook/useSubscribeNew';
import { Helmet } from 'react-helmet-async';

const NewsLetterAdmin = () => {
const {subscriber,isLoading}=useSubscribeNew()
   
  return (
    <div>
    <div className="overflow-x-auto">
   <Helmet>
      <title>Trainer-Quest - Newsletters </title>
    </Helmet> 
      <table className="min-w-full bg-[#007BFF] rounded-lg text-white">
        <thead>
          <tr className="">
            <th className="  py-2 px-4 border-b border-gray-200 text-left">
              Name
            </th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <Loading />
          ) : (
            subscriber?.map((newsletter) => (
              <tr key={newsletter._id} className="bg-[#141414]">
                <td className="py-2 px-4 border-b border-gray-200">
                  {newsletter?.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {newsletter?.email}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  
  </div>
  )
}

export default NewsLetterAdmin
