import React from "react";
import useTrainerBooking from "../../../../hook/useTrainerBooking";
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
//console.log(allTrainerClass)
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

        <div class="flex flex-col mt-6">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button class="flex items-center gap-x-2">
                          <span>Slot</span>

                          <svg
                            class="h-3"
                            viewBox="0 0 10 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.1"
                            />
                            <path
                              d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.1"
                            />
                            <path
                              d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.3"
                            />
                          </svg>
                        </button>
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                      <Link onClick={()=>deleteSlot(_id)}>
        
                      <UseButton btnHeading="DELETE" ></UseButton>
                        </Link>
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                  
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                      Delete
                      </th>

                      <th scope="col" class="relative py-3.5 px-4">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {allTrainerClass?.map((book) => (
                      <tr>
                        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div class="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div class="flex items-center gap-x-2">
                            
                              <div>
                                <h2 class="font-medium text-gray-800 dark:text-white ">
                          {book.trainerName}
                                </h2>
                                <p class="text-sm font-normal text-gray-600 dark:text-gray-400">
                            
                                </p>
                                
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 class="text-sm font-normal text-emerald-500">
                             {book.slot}
                            </h2>
                          </div>
                        </td>
                  
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                  {book?.userInfo?.userEmail}
                        </td>
                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                          <div class="flex items-center gap-x-2">
                         
                          </div>
                        </td>
                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                          <div class="flex items-center gap-x-6">
                           <Link onClick={()=>deleteSlot(book._id)}>
        
  <UseButton btnHeading="DELETE" ></UseButton>
    </Link>

                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ManageSlots;
