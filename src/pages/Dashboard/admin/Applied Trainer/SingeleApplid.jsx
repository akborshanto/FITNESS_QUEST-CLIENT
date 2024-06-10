import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
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
} from "@chakra-ui/react";
import useAuth from "../../../../auth/Auth";
import useAxiosSecure from "../../../../AxiosSecure/AxiosSecure";
import useRole from "../../../../hook/useRole";
const SingeleApplid = ({ refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [role] = useRole();

  // const {id}= useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const item = useLoaderData();

  /* hadnle reject */

  const { mutateAsync } = useMutation({
    mutationFn: async (users) => {
      const { data } = await axiosSecure.patch(`/user/${user?.email}`, users);
      return data;
    },
  });

  const handleConfirm = async (role) => {
    const users = {
      role: "trainer",
    };
    const response = await mutateAsync(users);

    if (response.modifiedCount > 0) {
      refetch();
      toast.success("successFuullly ");
    }
  };

  const handleFeedback = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
  };

  return (
    <div className="text-center">
      <label htmlFor="my_modal_6" className="btn">
        open modal
      </label>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>FEEDBACK</ModalHeader>
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
                  {item?.name}
                </h3>
                <p className=" text-slate-400">{item?.role}</p>
              </header>
            </div>
            {/*  <!-- Action base sized with lead icon buttons  --> */}
          </div>

          <div className="relative">
            <form onSubmit={handleFeedback}>
              <textarea
                id="id-b02"
                type="text"
                name="feedback"
                rows="3"
                placeholder="Write your message"
                className="peer relative w-full border-b border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              ></textarea>
              <button className="btn btn-success">Submit</button>
            </form>
            <label
              for="id-b02"
              className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Write your message
            </label>
          </div>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>

          <div className="p-6">
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 w-[300px] h-auto">
              {/*  <!-- Image --> */}
              <figure>
                <img
                  src={item?.imgBB}
                  alt="card image"
                  className="aspect-video w-full"
                />
              </figure>
              {/*  <!-- Body--> */}
              <div className="p-6">
                <header className="mb-4">
                  <h3 className="text-xl font-medium text-slate-700">
                    {item?.name}
                  </h3>

                  <p className=" text-slate-400"> Age{item?.age}</p>
                  <p className=" text-slate-400">Time{item?.time}</p>
                </header>
                <p></p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <h1>{item?.role}</h1>
            <button
              className="btn btn-success "
              onClick={() => handleConfirm(item.email)}
            >
              Confirm
            </button>

            <Link></Link>
            <Button onClick={onOpen} className="btn btn-success my-16">
              Reject
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingeleApplid;
