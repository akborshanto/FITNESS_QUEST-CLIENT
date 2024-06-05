import React from "react";
import useAllTrainer from "../../../../hook/useAllTrainer";
import { CloseButton } from '@chakra-ui/react'
import useRole from './../../../../hook/useRole';
const AllTrainerAdmin = () => {
  const [data] = useAllTrainer();

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
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
          <thead>
            <tr className="dark:bg-gray-300">
              <th className="p-3">Profile</th>
              <th className="p-3">Name</th>
              <th className="p-3">Skills</th>
              <th className="p-3">Time</th>
              <th className="p-3">Email</th>
              <th className="p-3">Delete</th>
          
            </tr>
          </thead>

          {data?.map((trainer) => (
            <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
              <tr>
                <td className="px-3 text-2xl font-medium dark:text-gray-600">
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
                  <span>{trainer?.skills?.business}</span>
            
                  <p className="dark:text-gray-600">White Wolf Brews</p>
                </td>
                <td className="px-3 py-2">
                  <p>{trainer?.time}</p>
                </td>
                <td className="px-3 py-2">
                  <p>{trainer.email}</p>
                </td>
                <td className="px-3 py-2">


                <CloseButton  />
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
