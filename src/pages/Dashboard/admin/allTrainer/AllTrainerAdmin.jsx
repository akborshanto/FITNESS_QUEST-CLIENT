import React from "react";
import useAllTrainer from "../../../../hook/useAllTrainer";
import { CloseButton } from "@chakra-ui/react";
import useRole from "./../../../../hook/useRole";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../../../auth/Auth";
import useAxiosSecure, { axiosSecure } from "../../../../AxiosSecure/AxiosSecure";
import toast from "react-hot-toast";
import Swal from 'sweetalert2'

const AllTrainerAdmin = () => {
  const [data,refetch] = useAllTrainer();
const axiosSecure=useAxiosSecure()






  const handleDelete = (id,role) => {
    console.log(id,role)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const {data}= axiosSecure.delete(`/delete-trainer/${id}`)
        refetch()
        if(data?.data.deletedCount >0){
        
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });


/* update role */







        }
      }
    });

    const  {data}= axiosSecure.patch(`/trainer-role/${id}`,role)
    console.log(data?.data)
    

  };
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
                  <CloseButton onClick={() => handleDelete(trainer?._id,trainer?.role)} />
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
