import React from 'react'
import useAuth from '../../../../auth/Auth'
import UseButton from '../../../../component/button/Button'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import ProfileModal from './ProfileModal'
import { axiosSecure } from '../../../../AxiosSecure/AxiosSecure'
import axios from 'axios'
import toast from 'react-hot-toast'

const image_hoisting_key = import.meta.env.VITE_IMGBB;
const image_hoisting_Api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;
const ProfilePage = () => {
  const {user,updateProfiles}=useAuth()


const handleUpdate=async(e)=>{
  e.preventDefault()


  console.log("dsfdsffsda")
  const form=e.target;
  const name= form.name.value;
  const image=form.photo.files[0];

  const formData=new FormData()
  formData.append('image',image)

  const { data } = await axios.post(image_hoisting_Api, formData);



updateProfiles(name,data?.data?.display_url)
.then(res=>{

if(data.data.success){
  toast.success("successfully Updated profile")
}
  
})

}

  return (
    <div>
    {/*<!-- Component: User profile card --> */}
    <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
    {/*  <!-- Image --> */}
    <figure className="p-6 pb-0">
      <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
        <img
          src={user?.photoURL}
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
          {user?.email}
        </h3>
        <p className=" text-slate-400">{user?.displayName}</p>
        <p className=" text-slate-400">{user?.metadata.lastSignInTime}</p>
      </header>
    </div>
    {/*  <!-- Action base sized with lead icon buttons  --> */}
    <div className="flex justify-end gap-2 p-6 pt-0">

<ProfileModal handleUpdate={handleUpdate}  user={user}>
<UseButton btnHeading="UPDATE"></UseButton>
</ProfileModal>


    </div>
  </div>
  {/*<!-- End User profile card --> */}

    </div>
  )
}

export default ProfilePage
