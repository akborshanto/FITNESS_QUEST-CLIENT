import React, { useEffect, useState } from 'react'

import Tb from './Tb';


import Loading from './../../../../component/Loading/Loading';
import { axiosSecure } from '../../../../AxiosSecure/AxiosSecure';

const NewsLetterAdmin = () => {

    const [subscribe, setSubscribe] = useState([]); // Start with an empty array
    const [isLoading, setIsLoading] = useState(true); // Start loading as true
    const [error, setError] = useState(null); // Optional: handle errors
  
    useEffect(() => {
      const fetchSubscribers = async () => {
        try {
          const res = await axiosSecure.get("/fitness/subscribers");
          setSubscribe(res.data[0]);
          console.log(res?.data[0]) // Assuming the data structure is correct
        } catch (err) {
          setError(err.message); // Handle any errors
        } finally {
          setIsLoading(false); // Set loading to false once done
        }
      };
  
      fetchSubscribers();
    }, []); // Empty dependency array to run once on mount
  
  console.log(subscribe)
  return (
    <div>
    <div className="overflow-x-auto">
{{/*     <Helmet>
      <title>Workout - Newsletters </title>
    </Helmet> */}}
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
            subscribe?.map((newsletter) => (
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
