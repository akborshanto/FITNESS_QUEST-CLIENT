import React from "react";

import TrainerTableRow from "./TrainerTableRow";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../../AxiosSecure/AxiosSecure";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UseButton from "../../../../component/button/Button";

const ManageSlots = () => {
  const axiosSecure = useAxiosSecure();
  const [allTrainerClass, refetch] = useTrainerBooking();

  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const data = await axiosSecure.delete(`/manageSlot/${id}`);

      return data;
    },
  });
////consolelog(allTrainerClass)
  const deleteSlot = async (id) => {
    const { data } = await mutateAsync(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (data.deletedCount > 0) {
        toast.success("succefully dele");
        refetch();
      }
    });
  };
  return (
    <div>
      <section class="container px-4 mx-auto">
        <div class="flex items-center gap-x-3">
          <h2 class="text-lg font-medium text-gray-800 dark:text-white">
          MANAGE YOUR SLOT
          </h2>

          <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
MANAGE YOUR SLOT
          </span>
        </div>

   
      </section>

    </div>
  );
};

export default ManageSlots;
