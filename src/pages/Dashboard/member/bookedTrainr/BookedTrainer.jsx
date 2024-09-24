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










  return (
    <div>
      <Helmet>
        <title>Workout - Booked trainers</title>
      </Helmet>
      <h2 className="text-4xl text-center font-semibold mb-4 text-white">
        Booked trainers
      </h2>
      {isLoading ? (
        <isLoading/>
      ) : bookedTrainer ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-[#007BFF] border-b  border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xl   text-white font-bold uppercase tracking-wider">
                  Trainer Name
                </th>
                <th className="px-6 py-3 text-left text-xl   text-white font-bold uppercase tracking-wider">
                  Class Name
                </th>
                <th className="px-6 py-3 text-left text-xl   text-white font-bold uppercase tracking-wider">
                  Slot Name
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookedTrainer.map((booking) => (
                <tr key={booking._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.trainerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.class}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {booking.soltName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-2xl text-center font-semibold mb-4 text-white">
          You didn't booked any trainer yet
        </h2>
      )}
    </div>

  
  );
};

export default BookedTrainer;
