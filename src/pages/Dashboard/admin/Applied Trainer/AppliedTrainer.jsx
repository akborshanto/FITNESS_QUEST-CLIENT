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

  const { data: allBecomeTrainerData } = useQuery({
    queryKey: ["AllTrainer"],
    queryFn: async (req, res) => {
      const { data } = await axiosSecure.get("/become-trainer");
      return data;
    },
  });

  const TrainerSingleData = (id) => {
    useEffect(() => {
      // axios.get(`http://localhost:5000/application/${id}`)
      // .then(response => {
      //   setSelectedApplication(response.data);
      //   setShowModal(true);
      // })
      // .catch(error => {
      //   console.error('There was an error fetching the application details!', error);
      // });

      axiosSecure.get(`/trainerSingleData/${id}`).then((res) => {
        setItem(res.data);
      });
    }, [id]);

    // const { data } = useQuery({

    //   queryKey:['singleData'],
    //   queryFn:async (id)=>{
    //     const  data  = await axiosSecure.get(`/trainerSingleData/${id}`);
    //     console.log(data)
    //       return data;
    //   }

    //     });
  };
  console.log(item);
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
                    TrainerSingleData={TrainerSingleData}
                  ></TableDataRowAdmin>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        {/*<!-- End Underline Table --> */}

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 w-[300px] h-auto">
                {/*  <!-- Image --> */}
                <figure>
                  <img
                    src="dsaf"
                    alt="card image"
                    className="aspect-video w-full"
                  />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                  <header className="mb-4">
                    <h3 className="text-xl font-medium text-slate-700">
                      Greek breakfast
                    </h3>
                    <p className=" text-slate-400"> $8.99</p>
                  </header>
                  <p>
                    Blueberry Superpower: Vanilla Greek Yogurt + Fresh
                    Blueberries + Granola + Honey.
                  </p>
                </div>
                {/*  <!-- Action base sized basic button --> */}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => handleUpdate(trainer?._id)}
                className="btn btn-danger"
              >
                {" "}
                Confirm
              </button>

              {/*  ==================================== REJECT MODAL===============================================*/}

              <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                <button onClick={() => handleReject()}>Reject</button>
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click the button below to close
                  </p>
                  <div className="modal-action">
                    <form method="dialog" onSubmit={handleFeedback}>
                      {/*<!-- Component: User profile card --> */}
                      <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
                        {/*  <!-- Image --> */}
                        <figure className="p-6 pb-0">
                          <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
                            <img
                              src={item?.imgBB}
                              alt="user name"
                              title="user name"
                              width="80"
                              height="80"
                              className="max-w-full rounded-full"
                            />
                          </span>
                        </figure>
                        {/*  <!-- Body--> */}
                        <div className="p-6">
                          <header className="mb-4">
                            <h3 className="text-xl font-medium text-slate-700">
                              Nichole Jones
                            </h3>
                            <p className=" text-slate-400">Senior Designer</p>
                          </header>
                        </div>
                        {/*  <!-- Action base sized with lead icon buttons  --> */}
                        <div className="flex justify-end gap-2 p-6 pt-0">
                          <div className="relative">
                            <textarea
                              id="id-b02"
                              type="text"
                              name="feedback"
                              rows="3"
                              placeholder="Write your message"
                              className="peer relative w-full border-b border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            ></textarea>
                            <label
                              for="id-b02"
                              className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                              Write your FeedBack
                            </label>
                          </div>
                        </div>
                      </div>

                      <button className="btn btn-info">Submit</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default AppliedTrainerAdmin;
