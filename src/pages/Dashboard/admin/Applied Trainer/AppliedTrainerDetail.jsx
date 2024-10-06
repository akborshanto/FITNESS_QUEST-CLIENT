import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAppliedNew from "./../../../../hook/useAppliedNew";
import { useParams } from "react-router-dom";
import Loading from "./../../../../component/Loading/Loading";
import useAxiosSecure from "../../../../AxiosSecure/AxiosSecure";
import toast from "react-hot-toast";

const AppliedTrainerDetail = () => {
  const { error } = useAppliedNew();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [trainerData, setTrainerData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setIsOpenModal] = useState(false);

  // Function to fetch trainer details
  const fetchTrainerDetail = async () => {
    try {
      const response = await axiosSecure.get(`/fitness/pending-trainers/${id}`);
      setTrainerData(response.data);
    } catch (err) {
      setIsError(true);
      console.error("Error fetching trainer detail:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch trainer detail when component mounts or `id` changes
  useEffect(() => {
    if (id) {
      fetchTrainerDetail();
    }
  }, [id]); // Ensure that only the `id` is the dependency
  

  const toggleModal1 = () => {
    setIsOpenModal(prevState => !prevState);
  };
  
  const closeModal = () => {
    setIsOpenModal(false);
  };
  

  const handleApproveBtn = (details) => {
    const statusData = "approved";
    const data = { ...details, statusData };
    axiosSecure
      .post(`/applictionBecameTrainerUpdata/${details._id}`, data)
      .then(() => {
        toast.success("Successfully Approved the role");
      })
      .catch((err) => {
        console.error("Error approving the role:", err);
        toast.error("Failed to approve the role");
      });
  };

  const handleReject = (id) => {
    axiosSecure
      .delete(`/applictionBecameTrainerDelete/${id}`)
      .then(() => {
        toast.success("Successfully Rejected the role");
      })
      .catch((err) => {
        console.error("Error rejecting the role:", err);
        toast.error("Failed to reject the role");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Fitness - Applied data</title>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <div>Error loading trainer data.</div>
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
                    trainerData.day.map((day, index) => (
                      <li key={index} className="text-gray-700">
                        {day.label}
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
                    trainerData.skill.map((specialty, index) => (
                      <li key={index} className="text-gray-700">
                        {specialty.value}
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
                onClick={() => handleReject(trainerData?._id)}
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
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <form>
                  <div className="modal-action">
                    <button className="btn" onClick={toggleModal}>
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppliedTrainerDetail;
