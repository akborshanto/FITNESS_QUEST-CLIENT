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
  // Button,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import AllTrainerAdminCard from "./TableDataRowAdmin";
import useAppliedNew from "./../../../../hook/useAppliedNew";
import { Link, useParams } from "react-router-dom";

const AppliedTrainerAdmin = () => {
  const [id, setId] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  // const {id}=useParams()

  const { pendingTrainer, isLoading } = useAppliedNew();
  const axiosSecure = useAxiosSecure();

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
                      src={trainer?.image}
                      alt=""
                      className="h-16 rounded-full"
                    />
                    <h1>{trainer?.name}</h1>
                  </div>
                  <h1 className="text-base ">Applied for becoming a trainer</h1>
                  <div className="flex gap-3 items-center">
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="bg-[#1a1516d3] rounded-full px-5 text-white py-2 capitalize"
                      onClick={() => {
                        document.getElementById("my_modal_3").showModal(),
                          setSelectedTrainer(trainer);
                      }}
                    >
                      {" "}
                      <FaEye />
                    </button>

                    {/* router  */}
                    <Link
                      to={`/dashboard/applied-trainer-detail/${trainer?._id}`}
                    >
                      <button className="bg-[#1a1516d3] rounded-full px-5 text-white py-2 capitalize">
                        Detail
                      </button>
                    </Link>
                  </div>
                </div>
              ) : null
            )}
          </div>
        )}

        <dialog id="my_modal_3" className="modal text-black">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className=" text-lg">
              <span className="font-bold font-serif ">Name:</span>
              {selectedTrainer?.name}!
            </h3>
            <h3 className="py-4 ">
              <span className="font-bold font-serif ">Email:</span>
              {selectedTrainer?.email}
            </h3>
            <h3 className="py-4 ">
              <span className="font-bold font-serif ">Skill:</span>
              {selectedTrainer?.skill?.map((s) => (
                <li key={Math.random()}>{s.label}</li>
              ))}
            </h3>
            <h3 className="py-4 ">
              <span className="font-bold font-serif ">
                Availabe Day in Week:
              </span>
              {selectedTrainer?.day?.map((d) => (
                <li key={Math.random()}>{d.label}</li>
              ))}      <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className=" text-lg">
                          <span className="font-bold font-serif ">Name:</span>
                          {selectedTrainer?.name}!
                        </h3>
                        <h3 className="py-4 ">
                          <span className="font-bold font-serif ">Email:</span>
                          {selectedTrainer?.email}
                        </h3>
                        <h3 className="py-4 ">
                          <span className="font-bold font-serif ">Skill:</span>
                          {selectedTrainer?.skill?.map((s) => (
                            <li key={Math.random()}>{s.label}</li>
                          ))}
                        </h3>
                        <h3 className="py-4 ">
                          <span className="font-bold font-serif ">
                            Availabe Day in Week:
                          </span>
                          {selectedTrainer?.day?.map((d) => (
                            <li key={Math.random()}>{d.label}</li>
                          ))}
                        </h3>
                      </div>
                    </dialog>
            </h3>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default AppliedTrainerAdmin;
