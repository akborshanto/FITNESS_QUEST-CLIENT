import React from "react";
import useAllTrainer from "../../../../hook/useAllTrainer";
import { CloseButton } from '@chakra-ui/react'
const AllTrainerAdmin = () => {
  const [data] = useAllTrainer();
  console.log(data);
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
              <th className="p-3">A-Z</th>
              <th className="p-3">Name</th>
              <th className="p-3">Job title</th>
              <th className="p-3">Phone</th>
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
                  <span>Nuclear Technician</span>
                  <p className="dark:text-gray-600">White Wolf Brews</p>
                </td>
                <td className="px-3 py-2">
                  <p>555-654-9810</p>
                </td>
                <td className="px-3 py-2">
                  <p>mariah@claxton.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>R Oliveirinhas 71, Maia</p>
                  <p className="dark:text-gray-600">Portugal</p>
                </td>
                <td className="px-3 py-2">
                  <button
                    type="button"
                    title="Open details"
                    className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                    </svg>
                  </button>
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
