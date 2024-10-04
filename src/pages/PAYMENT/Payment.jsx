import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { Helmet } from 'react-helmet-async'
import useAuth from '../../auth/Auth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../AxiosSecure/AxiosSecure';
const stripePromise = loadStripe(
  "pk_test_51PLSF52NHkygt9EvW5PNK63NKBr6kkBTgkG4tl7TmdFHGow5zH3sSxzCDExJEkTgkxbDwxbPJcB8CZ2HQR8UE5C9005BIaeGcY"
);
export const Payment = () => {
  const axiosSecure=useAxiosSecure()
  const {id}=useAuth()
  const {data,isLoading}=useQuery({
    queryKey:['trainer-detail'],
    queryFn:async ()=>{
  
        const {data}=await axiosSecure.get(`/fitness/single-slot-id/${id}`)
  
        return data
    }
  })
console.log(data)
  return (
    <div className="bg-[#141414] pb-10">
    <Helmet>
  <title>Fitness - Payment</title>
</Helmet>
<div>
  {/* title ----------------------------- */}

  <div className="relative pt-28  w-full space-y-4 pb-10">
    <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
      Confirm
      <span className="text-[#007BFF]"> Booking</span>
    </h1>
  </div>
  {isLoading ? (
    <div className="min-h-screen w-full flex items-center justify-center">
      {" "}
      <ReactLoading
        type={"spin"}
        color={"#007BFF"}
        height={50}
        width={50}
      />
    </div>
  ) : (
    <div>
      <div className="max-w-md mx-auto px-4 py-8 text-black bg-white rounded-lg shadow-md">
        {/* <h1 className="text-xl font-medium mb-4">Confirmation</h1> */}
        <div className="   p-4">
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="text-gray-500 font-bold">
                Trainer Name:
              </span>
              <span className="font-bold">{data.name}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-500 font-bold">Slot:</span>
           {/*    <span className="font-bold">{data.slotName}</span> */}
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-500 font-bold">Package:</span>
      {/*         <span className="font-bold">{data.packageName}</span> */}
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-500 font-bold">Price:</span>
             {/*  <span className="font-bold">${data.price}</span> */}
            </li>

            <>
              <li className="flex justify-between items-center">
                <span className="text-gray-500 font-bold">
                  Your Name:
                </span>
                <span className="font-bold">
                  {data.name}
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-500 font-bold">Email:</span>
                <span className="font-bold">
                  {data.email}
                </span>
              </li>
            </>
          </ul>
          <div>
      {/*       <Elements stripe={stripePromise}>
              <CheckOutForm />
            </Elements> */}
          </div>
        </div>
      </div>
    </div>
  )}
</div>
</div>
  )
}
