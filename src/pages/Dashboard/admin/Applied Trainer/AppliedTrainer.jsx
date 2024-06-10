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
import { useLoaderData, useParams } from "react-router-dom";

/* modal */

const AppliedTrainerAdmin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({});
  const { item, setItem } = useState(null);
  const id=useLoaderData()
  console.log(id)
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

    <>

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
        
        
      {allBecomeTrainerData?.map((trainer) => (
        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300 my-6">
          
        <tr>

        
 {       <TableDataRowAdmin
        trainer={trainer}
   
        handleFeedback={handleFeedback}
        handleConfirm={handleConfirm}
        refetch={refetch}
      ></TableDataRowAdmin>}
        </tr>
       
        </tbody>
      ))}
    </table>
  </div>





















    
  </div>
    
    </>
  
  );
};

export default AppliedTrainerAdmin;
