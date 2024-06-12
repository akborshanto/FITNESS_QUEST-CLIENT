import React from "react";
import useAuth from "../../../../auth/Auth";
import useAxiosSecure from "../../../../AxiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const BookedTrainer = () => {

  const { user } = useAuth();
  const navigate=useNavigate()
  const axiosSecure = useAxiosSecure();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data } = useQuery({
    queryKey: ["bookTrainer", user?.email],

    queryFn: async () => {
const { data } = await axiosSecure.get(`/bookTrainer/${user?.email}`);
      
      return data;
    },
  });


/* ratinsystme */


const handleRating = async (e) => {
  e.preventDefault();
  const name = user?.displayName;
  const email = user?.email;
  const photo = user?.photoURL;
  const date = new Date().toLocaleDateString();
  const descriptions = e.target.description.value;

  const ratinInfo = { name, email, photo, date, descriptions };
  
  /* axiiso secure */
  //   
  await axiosSecure.post("/rating", ratinInfo).then((res) => {

    if(res.data.insertedId){
      navigate('/dashboard')
      toast.success("Thanks For Feedback");
  
  
    }

  });
};







  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-8">
    {
data?.length === 0 ?  <h1 className="text-2xl font-bold" >PLASE   BOOKING THE TRAINER{data?.length} </h1> :data?.map((data)=>{
    
    const  {
      trainerName,
      slot,
      classs,
      packages,
      userInfo,
      IntPrice,
      role,

      inc,
      totalBooking,
    }=data ||{}
    return(






<>

<div class="w-full max-w-sm w-[500px] h-[500px] overflow-hidden  rounded-lg shadow-lg text-black">
<header className="mb-4 flex gap-4">
<a
  href="#"
  className="relative inline-flex h-12 w-12 items-center justify-center rounded-full "
>
  <img
    src={data?.userInfo?.userPhoto}
    alt="user name"
    title="user name"
    width="48"
    height="48"
    className="max-w-full rounded-full"
  />
</a>
<div>
  <h3 className="text-xl font-medium text-slate-700">
 {data?.userInfo?.userName}
  </h3>
  <p className="text-sm text-slate-400">

  </p>
</div>
</header>
    <div class="flex items-center px-6 py-3 ">
 

        <span class="mx-3">Trainer Name:  {trainerName}</span>
    </div>

    <div class="px-6 py-4">
       
        <div class="flex items-center mt-4 text-gray-7000">

            <span class="mx-3">SLOT:{ slot}</span>
        </div>

        <div class="flex items-center mt-4 text-gray-7000">
          

        <span class="mx-3">Price :{IntPrice}</span>
        </div>

        <div class="flex items-center mt-4 text-gray-7000">
            <svg aria-label="email icon" class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"/>
            </svg>

            <span class="mx-3">Packages:{packages}</span>
         
        </div>

        <Button onClick={onOpen}>Review</Button>

    </div>



   
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
      <form onSubmit={handleRating}>
      {/*        <!-- Modal body --> */}
      <div id="content-4a" className="flex-1">
        <div className="flex flex-col gap-6">
          {/*                <!-- Input field --> */}
          <div id="content-4a" className="flex-1 w-[300px]">
            <div className="flex flex-col gap-6">
              {/*                <!-- Input field --> */}

              <div className="relative">
                <textarea
                  id="id-b02"
                  type="text"
                  name="description"
                  rows="3"
                  placeholder="Write your message"
                  className="peer relative w-full border-b border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                ></textarea>
                <label
                  for="id-b02"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Write your feedback
                </label>
              </div>

              {/*<!-- End Plain base size basic textarea --> */}
            </div>
          </div>
          {/*                <!-- Input field --> */}
        </div>
      </div>
      {/*        <!-- Modal actions --> */}
      <div className="flex justify-center gap-2">
        <button
          onSubmit={handleRating}
          className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
        >
          <span>Submit</span>
        </button>
      </div>
    </form>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
      
      </ModalFooter>
    </ModalContent>
  </Modal>
</div>




</>












      
 
  )})
    }
    
    </div>

  
  );
};

export default BookedTrainer;
