import React from "react";
import useAxiosSecure from "../../../../AxiosSecure/AxiosSecure";
import useAllTrainer from "../../../../hook/useAllTrainer";
import Swal from "sweetalert2";
import {
  Button,
  CloseButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import UseButton from "./../../../../component/button/Button";
import toast from "react-hot-toast";

/* modal */

const AppliedTrainerAdmin = () => {
  const [data, refetch] = useAllTrainer();
  console.log(data);
  const axiosSecure = useAxiosSecure();
  const handleDelete = async (id, role) => {
    console.log(id, role);
    const { data: memberRole } = await axiosSecure
      .patch(`/trainer-role/${id}`, role)

        if (res.memberRole?.modifiedCount > 0) {
          toast.success("Updated Role");
          console.log(memberRole);
          refetch();
        }
   

  };
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  //



  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
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
            <thead>
              <tr className="dark:bg-gray-300">
                <th className="p-3">Profile</th>
                <th className="p-3">Name</th>
                <th className="p-3">Skills</th>
                <th className="p-3">Time</th>
                <th className="p-3">Status</th>
                <th className="p-3">Delete</th>
              </tr>
            </thead>

            {data?.map((trainer) => (
              <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                <tr>
                  <td className="px-3 text-2xl font-medium dark:text-gray-600">
                    <a
                      href="#"
                      class="relative inline-flex items-center justify-center w-10 h-10 text-lg text-white rounded-full"
                    >
                      <img src={trainer?.imgBB} alt="" />
                    </a>
                  </td>
                  <td className="px-3 py-2">
                    <p>{trainer?.name}</p>
                  </td>
                  <td className="px-3 py-2">
                    <span>{trainer?.skills?.business}</span>

                    <p className="dark:text-gray-600">White Wolf Brews</p>
                  </td>
                  <td className="px-3 py-2">
                    <p>{trainer?.time}</p>
                  </td>
                  <td className="px-3 py-2">
                    <p>{trainer.status}</p>
                  </td>
                  <td className="px-3 py-2">
                    <FaEye />
                    <CloseButton
                      onClick={() => handleDelete(trainer?._id, trainer?.role)}
                    />{" "}
                    *
                    <Modal isCentered isOpen={isOpen} onClose={onClose}>
                      {overlay}
                      <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Text>
                            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                              {/*  <!-- Image --> */}
                              <figure>
                                <img
                                  src={trainer?.imgBB}
                                  alt="card image"
                                  className="aspect-video w-full"
                                />
                              </figure>
                              {/*  <!-- Body--> */}
                              <div className="p-6">
                                <header className="mb-4">
                                  <h3 className="text-xl font-medium text-slate-700">
                                    {trainer?.name}
                                  </h3>
                                  <p className="text-sm text-slate-400">
                                    {" "}
                                    By George, jun 3 2023
                                  </p>
                                </header>
                                <p>
                                  Experience the simple pleasures of a world
                                  with no cars, and only gentle walks through
                                  palm tree forests, and fallen coconuts. An
                                  island that’s home to extraordinary cliffs,
                                  swelling oceans, and mammoth manta rays.
                                </p>
                              </div>
                              <div className="flex justify-between">
                                <UseButton btnHeading="Reject"></UseButton>

                                <Button
                                  onClick={() =>
                                    handleDelete(trainer?._id, trainer?.role)
                                  }
                                >
                                  Confirm
                                </Button>
                              </div>
                            </div>
                          </Text>
                        </ModalBody>
                        <ModalFooter>
                          <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                    {/* MODAL================================================= */}
                    <Button
                      onClick={() => {
                        setOverlay(<OverlayOne />);
                        onOpen();
                      }}
                    >
                      Use Overlay one
                    </Button>
                    {/* MODAL================================================= */}
                  </td>
                </tr>
                <tr>
                  <td className="px-3 text-2xl font-medium dark:text-gray-600"></td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppliedTrainerAdmin;
