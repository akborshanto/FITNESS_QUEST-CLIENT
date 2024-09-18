import React, { useState } from "react";
import useAxiosSecure from "../../../../AxiosSecure/AxiosSecure";
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
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import AllTrainerAdminCard from "./TableDataRowAdmin";
import useAppliedNew from "./../../../../hook/useAppliedNew";

const AppliedTrainerAdmin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalData, setModalData] = useState(null);
  const [ id,setId]=useState(null)
  const { pendingTrainer } = useAppliedNew();
  const axiosSecure = useAxiosSecure();

  // Fetch all trainer data
  const { data: allBecomeTrainerData, refetch } = useQuery({
    queryKey: ["AllTrainers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/pending-dtrainer");
      return data;
    },
  });

  // Function to open modal with specific trainer data
  const toggleModal = (trainer) => {
    setModalData(trainer);
    onOpen();

  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const closeModal = () => {
    setIsOpen(false);
    setSeeDetails(false);
    setIsModalOpen(false);
  };

  // Feedback handling function
  const handleFeedback = async (e) => {
    e.preventDefault();
    const form = e.target;
    const feedback = form.feedback.value;

    try {
      await axiosSecure.post("/feedback-endpoint", { feedback });
      toast.success("Feedback submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit feedback");
    }
  };

  // Function to close the modal

  
  return (
    <>
      <div>
        <h2 className="text-4xl text-center font-semibold mb-4 text-white">
          Applications
        </h2>

        {pendingTrainer?.length === 0 ? (
          <h2 className="text-4xl text-center h-full font-semibold mb-4 pt-20 text-white capitalize">
            No Applications Available
          </h2>
        ) : (
          <div>
            {pendingTrainer?.map((trainer) =>
              trainer.status === "pending" ? (
                <div
                  key={trainer._id}
                  className="w-full bg-white text-black mt-5 rounded-2xl px-6 py-5 flex lg:flex-row flex-col justify-between items-center relative"
                >
                  <div className="flex gap-4 items-center lg:flex-row flex-col ">
                    <img
                      src={trainer?.classImage}
                      alt=""
                      className="h-16 rounded-full"
                    />
                    <h1>{trainer?.name}</h1>
                  </div>
                  <h1 className="text-base ">Applied for becoming a trainer</h1>
                  <div className="flex gap-3 items-center">
                    <button
                      onClick={() => toggleModal(trainer)}
                      className="bg-[#1a1516d3] rounded-full px-5 text-white py-2 capitalize"
                    >
                      <FaEye />
                    </button>
                    <Link to={`/dashboard/applicationDetails/${trainer._id}`}>
                      <button className="bg-[#787e79d3] rounded-full px-5 py-2 capitalize">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>

      {/* Modal for showing detailed info */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="text-balack">
          <ModalHeader className="text-black">Trainer Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="text-black">
<p>{modalData?.name}</p>
          
          
          
          
          
   </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div
      id="popup-modal"
      tabIndex="-1"
      className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only"  onClick={closeModal}>Close modal</span>
          </button>
          <div className="p-4 md:p-10 ">
            <h1 className="">
              <span className="font-bold">Name : </span>
              {modalData?.name}
            </h1>
            <h1 className="">
              <span className="font-bold">Email : </span>
              {modalData?.email}
            </h1>
            <h1 className="font-bold">
              {modalData?.experience}+ Year Experience
            </h1>
            <h1 className="font-bold">
              <span className="font-bold">Quote : </span>
         {/*      {modalData.quote} */}
            </h1>
            <div>
              <span className="font-bold lg:mb-8 md:text-lg   lg:text-xl">
                Specialties:
              </span>
              <ul className="list-disc list-inside ml-3">
                {modalData?.skill?.map((specialty, index) => (
                  <li key={index} className="ml-2">
                    {
                      specialty?.label
                      }
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h1 className=" font-extrabold ">Available days :</h1>
              <ul className=" list-disc  font-bold  ml-7 ">
                {modalData?.day.map((availableDay, index) => (
                  <li key={index} className="ml-2">
                    {dasy?.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
 {isModalOpen && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only" onClick={closeModal}>Close modal</span>
              </button>
              <div className="p-4 md:p-10">
                <h1>
                  <span className="font-bold">Name: </span>
                  {modalData?.name}
                </h1>
                <h1>
                  <span className="font-bold">Email: </span>
                  {modalData?.email}
                </h1>
                <h1 className="font-bold">
                  {modalData?.experience}+ Year Experience
                </h1>
                <div>
                  <span className="font-bold lg:mb-8 md:text-lg lg:text-xl">
                    Specialties:
                  </span>
                  <ul className="list-disc list-inside ml-3">
                    {modalData?.skill?.map((specialty, index) => (
                      <li key={index} className="ml-2">
                        {specialty?.value?.label}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h1 className="font-extrabold">Available days:</h1>
                  <ul className="list-disc font-bold ml-7">
                    {modalData?.day?.map((availableDay, index) => (
                      <li key={index} className="ml-2">
                        {day?.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    
    </>
  );
};

export default AppliedTrainerAdmin;
