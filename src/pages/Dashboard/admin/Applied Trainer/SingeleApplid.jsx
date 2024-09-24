import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
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
  Avatar,
} from "@chakra-ui/react";
import useAuth from "../../../../auth/Auth";
import useAxiosSecure from "../../../../AxiosSecure/AxiosSecure";

import UseButton from "../../../../component/button/Button";
import axios from "axios";
import { toast } from "react-hot-toast";
const SingeleApplid = ({ refetcha }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [role] = useRole();
  const navigate = useNavigate();
  // const {id}= useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const item = useLoaderData();
  const { name, skills, time, image, age, day, imgBB, experience, email, _id ,status} =
    item || {};
  /* hadnle reject */

  // const { mutateAsync } = useMutation({
  //   mutationFn: async (users) => {
  //     const { data } = await axiosSecure.patch(`/user/${user?.email}`, users);
  //     return data;
  //   },
  // });

  const handleConfirm = async () => {
 
try{

  await axiosSecure.patch(`/role/admin/${email}`).then((res) => {

if(res.data.modifiedCount >0){


  const ALL_TRAINER={
    name:name,
    skills:skills,
    time:time,
    image:image,
    age:age,
    day:day,
    imgBB:imgBB,
    experience:experience,
    email:email,
    role:"trainer",
    status:status,
  } 
  //consolelog(ALL_TRAINER)
  try{
    const {data}= axiosSecure.post( `${import.meta.env.VITE_API_URL}/allTr`,ALL_TRAINER)
    //consolelog(data)
  }catch(err){
  //consolelog(err)
  }
  

  toast.success("successfyllyy updated")






}else{
  toast.error("you have already Accecpetd")

}

  });

}catch(err){

  //consolelog(err)



}




  };

  const handleFeedback = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    //consolelog(feedback);
try{


axiosSecure.patch(`/feedback/${_id}`,{feedback})
.then(res=>{
  //consolelog(res.data)
  toast.success("Thandls for Feedback")
})

}catch(err){
  //consolelog(err)
}


    navigate("/dashboard/applied-trainer");
    toast.success("Thanks For Feedbahcak ");
  };

  return (
    <div className="text-center">
      <header class="bg-white text-black mx-auto p-6 ">
        <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <figure className="h-30">
                <img
                  src={imgBB}
                  alt="card asfdsafimage"
                  className="aspect-video w-full  "
                />
              </figure>
              <div class="grid gap-6 mt-8 sm:grid-cols-2">
                <div class="flex items-center text-gray-800 -px-3 -200">
                  <svg
                    class="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span class="mx-3 text-blue-500">Trainer Name:{name}</span>
                </div>

                <div class="flex items-center  -px-3 -200">
                  <svg
                    class="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span class="mx-3">Experience{experience}</span>
                </div>

                <div class="flex items-center text-gray-800 -px-3 -200">
                  <svg
                    class="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span class="mx-3">Expertise{skills?.timemanagement}</span>
                </div>

                <div class="flex items-center text-gray-800 -px-3 -200">
                  <svg
                    class="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span class="mx-3">Social Icon</span>
                </div>

                <div class="flex items-center text-gray-800 -px-3 -200">
                  <svg
                    class="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span class="mx-3 text-3xl"></span>

                  <span class="mx-3">Availave Time{time}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex items-center justify-center w-full h-96 lg:w-1/2
    "
          >
            <div className="text-center lg:flex gap-6">
              {/* confirm button */}
              <button
                onClick={handleConfirm}
                className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-red-400  px-6 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:border-emerald-600 hover:text-emerald-600 focus:border-emerald-700 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-black disabled:shadow-none`}
              >
                Confirm
              </button>

              <Button onClick={onOpen} className="btn btn-success my-16">
                Reject
              </Button>
            </div>
          </div>
        </div>
      </header>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> GIVE YOUR FEEDBACK</ModalHeader>
          <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
            {/*  <!-- Image --> */}
            <figure className="p-6 pb-0">
              <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
                <Avatar name={user?.displayName} src={user?.photoURL} />
                {/*          <img
                  src={user?.photoURL}
                  alt="user name"
                  title="user name"
                  width="80"
                  height="80"
                  className="max-w-full rounded-full"
                /> */}
              </span>
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <header className="mb-4">
                <h3 className="text-xl font-medium text-slate-700">
                  {user?.displayName}
                </h3>
                <h3 className="text-xl font-medium text-slate-700">
                  {user?.email}
                </h3>
                <p className=" text-slate-400">{item?.role}</p>
              </header>
            </div>
            {/*  <!-- Action base sized with lead icon buttons  --> */}
          </div>

          <div className="relative p-6">
            <form onSubmit={handleFeedback}>
              <textarea
                id="id-b02"
                type="text"
                name="feedback"
                rows="3"
                placeholder="Write your message"
                className="peer relative w-full border-b border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              ></textarea>

              <UseButton btnHeading="Submit"></UseButton>
            </form>
            <label
              for="id-b02"
              className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Write your feedback
            </label>
          </div>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>

      {/* Put this part before </body> tag */}
    </div>
  );
};

export default SingeleApplid;
