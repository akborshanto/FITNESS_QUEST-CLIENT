import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../AxiosSecure/AxiosSecure";
import useAllTrainer from "../../../../hook/useAllTrainer";
import Swal from "sweetalert2";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Link,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import UseButton from "./../../../../component/button/Button";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import TableDataRowAdmin from "./TableDataRowAdmin";

/* modal */

const AppliedTrainerAdmin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({});
  const { item, setItem } = useState(null);
  // const [data, refetch] = useAllTrainer();
  // console.log(data);
  const axiosSecure = useAxiosSecure();

  // const handleUpdate = async (id, role) => {
  //   // console.log(id, role);
  //   const { data: memberRole } = await axiosSecure.patch(
  //     `/trainer-role/${id}`,
  //     role
  //   );

  //   if (memberRole?.modifiedCount > 0) {
  //     toast.success("Updated Role");
  //     //  console.log(memberRole);
  //     refetch();
  //   } else {
  //     toast.error("Already Updated role");
  //   }
  // };

  const { data: allBecomeTrainerData,refetch } = useQuery({
    queryKey: ["AllTrainer"],
    queryFn: async (req, res) => {
      const { data } = await axiosSecure.get("/become-trainer");
      return data;
    },
  });


/* update trainer role */


const handleConfirm=()=>{

console.log("dfsadsfdsaff")


}


  const TrainerSingleData = (id) => {
    // useEffect(() => {
    //   // axios.get(`http://localhost:5000/application/${id}`)
    //   // .then(response => {
    //   //   setSelectedApplication(response.data);
    //   //   setShowModal(true);
    //   // })
    //   // .catch(error => {
    //   //   console.error('There was an error fetching the application details!', error);
    //   // });

    //   axiosSecure.get(`/trainerSingleData/${id}`).then((res) => {
    //     setItem(res.data);
    //   });
    // }, [id]);

    // const { data } = useQuery({

    //   queryKey:['singleData'],
    //   queryFn:async (id)=>{
    //     const  data  = await axiosSecure.get(`/trainerSingleData/${id}`);
    //     console.log(data)
    //       return data;
    //   }

    //     });
  };

  //const saveData = JSON.parse(localStorage.getItem("singleTrainer"));

  /* handle feedback================================== */
  const handleFeedback = async (e) => {
    e.preventDefault();
    const form = e.target;
    const feedback = form.feedback.value;
    //console.log(feedback);

    const { data } = await axiosSecure.post("/");
  };

  const handleReject = (e) => {};
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>

        <div className="w-full overflow-x-auto">
          <table
            className="w-full text-left border-collapse rounded w-overflow-x-auto "
            cellspacing="0"
          >
            <tbody>
              <tr className="border-b border-slate-300">
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                >
                  Company
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                >
                  Username
                </th>
              </tr>
              {/* MASPING */}
              <tr>
                {allBecomeTrainerData?.map((trainer) => (
                  <TableDataRowAdmin
                    trainer={trainer}
               
                    handleFeedback={handleFeedback}
                    handleConfirm={handleConfirm}
                    refetch={refetch}
                  ></TableDataRowAdmin>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        {/*<!-- End Underline Table --> */}

   
      </div>
    </div>
  );
};

export default AppliedTrainerAdmin;
