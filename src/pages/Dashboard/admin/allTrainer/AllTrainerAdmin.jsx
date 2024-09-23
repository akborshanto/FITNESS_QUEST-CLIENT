import React from "react";
import useAllTrainer from "../../../../hook/useAllTrainer";
import { CloseButton } from "@chakra-ui/react";
import useRole from "./../../../../hook/useRole";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../../../auth/Auth";
import useAxiosSecure, {
  axiosSecure,
} from "../../../../AxiosSecure/AxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';
import useTrainerNew from "../../../../hook/useTrainerNew";
import Loading from './../../../../component/Loading/Loading';
import { FaTrash } from "react-icons/fa6";

const AllTrainerAdmin = () => {

const {allTrainer,isLoading,refetch}=useTrainerNew()

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
            allTrainer.map((trainer) => (
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
                    onClick={() => handleDelete( trainer.email)}
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
