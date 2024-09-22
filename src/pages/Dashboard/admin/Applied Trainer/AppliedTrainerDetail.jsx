import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAppliedNew from "./../../../../hook/useAppliedNew";
import { useParams } from "react-router-dom";

import Loading from "./../../../../component/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../AxiosSecure/AxiosSecure";
import axios from "axios";
import toast from "react-hot-toast";

const AppliedTrainerDetail = () => {
  const { error } = useAppliedNew();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams() || {}; // Correctly destructuring the `id` from useParams
  const [trainerData, setTrainerData] = useState(null);
  const [isError, setIsError] = useState("");
  const [openModal, setIsOpenModal] = useState(false);
  console.log(trainerData);
  // Function to fetch trainer details
  const fetchTrainerDetail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/fitness/pending-trainers/${id}`
      );
      setTrainerData(response.data); // Set the data in the state
    } catch (err) {
      //console.error('Error fetching trainer detail:', err);
      setIsError("ERROR...........");
    }
  };

  // Fetch trainer detail when component mounts or `id` changes
  useEffect(() => {
    if (id) {
      fetchTrainerDetail();
    }
  }, [id]); // Only refetch when `id` changes

  const toggleModal1 = () => {
    setIsOpenModal(!isOpen);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };
  const isOpen = () => {
    setIsOpenModal(!setIsOpenModal);
  };


const handleApproveBtn=(datails)=>{

const statusData="approved";

const data={...datails,statusData};
axiosSecure.post(`/applictionBecameTrainerUpdata/${datails._id}`)
.then((res)=>{
toast.success("Successfully Approved the role")
console.log(res.data)
})
.catch((err)=>{
  console.log(err)
})


}
const handleReject=(id)=>{


axiosSecure.delete(`/applictionBecameTrainerDelete/${id}`)
.then((res)=>{
toast.success("Successfully Reject the role")
console.log(res.data)
})
.catch((err)=>{
  console.log(err)
})


}



  return (
    <div>
      <Helmet>
        <title>Workout - Application data</title>
      </Helmet>
      {isError ? (
        <Loading />
      ) : (
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-center mt-3 items-center px-10">
            <img
              className="h-64 object-cover mr-5"
              src={trainerData?.classImage}
              alt={`${trainerData?.name || "Trainer"}'s profile`}
            />
            <div>
              <h2 className="text-2xl font-bold mb-2">{trainerData?.name}</h2>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> {trainerData?.email}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Years of Experience:</strong> {trainerData?.experience}
              </p>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-evenly">
              {/* Available Days */}
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Available Days:</strong>
                </p>
                <ul className="list-disc list-inside mb-4">
                  {trainerData?.day?.length > 0 ? (
                    trainerData?.day?.map((day, index) => (
                      <li key={index} className="text-gray-700">
                        {day?.label}
                      </li>
                    ))
                  ) : (
                    <li>No available days</li>
                  )}
                </ul>
              </div>

              {/* Specialties */}
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Specialties:</strong>
                </p>
                <ul className="list-disc list-inside mb-4">
                  {trainerData?.skill?.length > 0 ? (
                    trainerData?.skill?.map((specialty, index) => (
                      <li key={index} className="text-gray-700">
                        {specialty?.value}
                      </li>
                    ))
                  ) : (
                    <li>No specialties</li>
                  )}
                </ul>
              </div>

              {/* Slots */}
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Slots:</strong>
                </p>
                <ul className="list-disc list-inside mb-4">
                  {trainerData?.slots?.length > 0 ? (
                    trainerData.slots.map((slot, index) => (
                      <li key={index}>{slot}</li>
                    ))
                  ) : (
                    <li>No slots available</li>
                  )}
                </ul>
              </div>
            </div>

            {/* Approve/Reject Buttons */}
            <div className="flex justify-between mt-4">
              <button
                className="bg-[#d84c58d3] rounded-full px-5 py-2 capitalize"
                onClick={() =>
              handleReject(trainerData?._id)
                }
              >
                Reject
              </button>

              <button
                onClick={() => handleApproveBtn(trainerData)}
                className="bg-[#47da6cd3] rounded-full px-5 py-2 capitalize"
              >
                Approve
              </button>
            </div>

            {/* Feedback Modal */}

            {/* Open the modal using document.getElementById('ID').showModal() method */}
    {        <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
             {/*    <form
                  onSubmit={(e) => handleReject(e)}
                  className="p-4 text-center"
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="description"
                    >
                      Feedback
                    </label>
                    <textarea
                      required={true}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="feedback"
                      placeholder="Enter description"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-rose-500 px-4 rounded-full py-2"
                  >
                    Submit
                  </button>
                </form> */}
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppliedTrainerDetail;
