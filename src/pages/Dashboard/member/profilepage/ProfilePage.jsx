import React from "react";
import useAuth from "../../../../auth/Auth";
import UseButton from "../../../../component/button/Button";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import ProfileModal from "./ProfileModal";
import { axiosSecure } from "../../../../AxiosSecure/AxiosSecure";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "./../../../../component/Loading/Loading";
const image_hoisting_key = import.meta.env.VITE_IMGBB;
const image_hoisting_Api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;
const ProfilePage = () => {
  const { user, updateProfiles, loading } = useAuth();

  
  const handleUpdate = async (e) => {
    e.preventDefault();

    //consolelog("dsfdsffsda");
    const form = e.target;
    const name = form.name.value;
    const image = form.photo.files[0];

    const formData = new FormData();
    formData.append("image", image);

    const { data } = await axios.post(image_hoisting_Api, formData);

    updateProfiles(name, data?.data?.display_url).then((res) => {
      if (data.data.success) {
        toast.success("successfully Updated profile");
      }
    });
  };

  return (
    <div>
      <div>
        {/*     <Helmet>
      <title>Workout - Profile</title>
    </Helmet> */}
        {loading ? (
          <Loading />
        ) : (
          <div className="flex items-center justify-center  mt-8 ">
            <div className="w-full max-w-sm bg-blue-100 border border-gray-200 rounded-lg shadow">
              <div className="flex flex-col items-center pb-10">
                <div
                  className="w-full  "
                  style={{
                    backgroundImage:
                      "url(https://i.ibb.co/7VGkHqb/brick-random-size-lite-blue-260nw-2177706495.jpg)",
                  }}
                >
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg ring-2 relative top-14 -right-[140px] "
                    src={user.photoURL}
                    alt="User image"
                  />
                </div>

                <div className=" p-5 text-center mt-10">
                  <h5 className="mb-1 text-base bg-red-400 rounded-full font-medium text-gray-900">
                    {/*       {isAdmin ? "admin" : ""} */} ADMIN
                  </h5>
                  <h5 className="mb-1 text-base bg-red-400 rounded-full font-medium text-gray-900">
                    {/*     {isTrainer ? "Trainer" : ""} */}TRAINER
                  </h5>
                  <h5 className="mb-1 text-2xl font-medium text-gray-900">
                    {user.displayName}
                  </h5>
                  <h5 className="mb-1 text-xl font-medium text-gray-900">
                    {user.email}
                  </h5>
                  <span className="text-sm text-gray-500">
                    Last log in :{/*  {dateOnly} */}
                    {user?.metadata?.lastSignInTime}
                  </span>
                </div>
                {/*  <!-- Action base sized with lead icon buttons  --> */}
                <div className="flex justify-end gap-2 p-6 pt-0 mt-6  ">
                  <ProfileModal handleUpdate={handleUpdate} user={user}>
                    <button className="mb-1 text-base bg-red-400 rounded-full font-medium text-gray-900">
                      Update
                    </button>
                  </ProfileModal>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
