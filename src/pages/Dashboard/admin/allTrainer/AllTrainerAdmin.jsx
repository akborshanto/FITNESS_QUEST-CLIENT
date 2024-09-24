import React from "react";
import { CloseButton, } from "@chakra-ui/react";

import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../../../auth/Auth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';

import Loading from './../../../../component/Loading/Loading';
import { FaTrash } from "react-icons/fa6";
import useAxiosSecure from "../../../../AxiosSecure/AxiosSecure";

const AllTrainerAdmin = () => {
const axiosSecure=useAxiosSecure()
const { data, isLoading, refetch, error } = useQuery({
  queryKey: ['trainers'],
  queryFn: async () => {
    const { data } = await axiosSecure.get('/fitness/allTrainerNew');
    return data; // Ensure that data is returned here
  },
});
console.log("DSFDD",data)

const handleDelete=(email)=>{

console.log(email)
  axiosSecure.delete(`/fitness/allTrainerNewDelete/${email}`)
  .then((res)=>{

  toast.success("Successfully delet the user")

  refetch()
  })
  .catch((err)=>{
    console.log(err)
  })



refetch()


}


  return (
    <div>
    <div className="overflow-x-auto">
    <Helmet>
      <title>Trainr-Quest - Manage Trainers</title>
    </Helmet>
      <table className="min-w-full bg-[#007BFF] rounded-lg text-white">
        <thead>
          <tr className="">
            <th className="  py-2 px-4 border-b border-gray-200 text-left">
              Image
            </th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">
              Name
            </th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <Loading/>
          ) : (
            data?.map((trainer) => (
              <tr key={trainer._id} className="bg-[#141414]">
                <td className="py-2 px-4 border-b border-gray-200">
                  <img
                    src={trainer.image}
                    className="h-14 rounded-full"
                    alt=""
                  />
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {trainer.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {" "}
                  <button
                    onClick={() => handleDelete( trainer?.email)}
                    className=" bg-rose-600 px-2 rounded-full py-2"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default AllTrainerAdmin;
