import React from "react";
import useAllTrainer from "../../../../hook/useAllTrainer";
import { CloseButton } from "@chakra-ui/react";
import useRole from "./../../../../hook/useRole";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../../../auth/Auth";
import useAxiosSecure, { axiosSecure } from "../../../../AxiosSecure/AxiosSecure";
import toast from "react-hot-toast";
import Swal from 'sweetalert2'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
const AllTrainerAdmin = () => {
  const [data,refetch] = useAllTrainer();
  const [role]=useRole()

const axiosSecure=useAxiosSecure()

console.log(role)





  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
   
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <colgroup>
            <col className="w-5" />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-5" />
          </colgroup>
          <thead className="mb-4">
            <tr className="dark:bg-gray-300">
              <th className="p-">Profile</th>
              <th className="p-3">Name</th>
          
              <th className="p-3">Time</th>
              <th className="p-3">Email</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>

  
          {/*   filter(member=> member.role === "trainer") */}
            
            
          {data?.filter(member=> member.role === "trainer").map((trainer) => (
            <tbody className="border-b dark:bg-gray-50 dark:border-gray-300 my-6">
              <tr>
                <td className="px-3 text-2xl font-medium dark:text-gray-600 my-6">
                  <a
                    href="#"
                    class="relative inline-flex items-center justify-center w-10 h-10 text-lg text-white rounded-full"
                  >
                    <img src={trainer?.imgBB} alt="" />
                  </a>
                </td>
                <td className="px-3 py-2">
                  <p>{trainer?.name}</p>
                </td>
                
                <td className="px-3 py-2">
                  <p>{trainer?.time}</p>
                </td>
                <td className="px-3 py-2">
                  <p>{trainer.email}</p>
<p>{trainer?.role}</p>

                                  </td>
                <td className="px-3 py-2">


                  <button   className="text-green-400">Enable </button>
                </td>
              </tr>
              <tr>
                <td className="px-3 text-2xl font-medium dark:text-gray-600"></td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>


      
    </div>
  );
};

export default AllTrainerAdmin;
