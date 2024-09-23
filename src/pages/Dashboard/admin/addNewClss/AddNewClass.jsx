import { Select } from "@chakra-ui/react";
import React from "react";
import UseButton from "../../../../component/button/Button";
import useAxiosSecure from "../../../../AxiosSecure/AxiosSecure";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../../../../auth/Auth";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
const image_hoisting_key = import.meta.env.VITE_IMGBB;
const image_hoisting_Api = 
`https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;
const AddNewClassAdmin = () => {
  const axiosSecure=useAxiosSecure()
  const {user}=useAuth()
  const navigate=useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const classs = form.class.value;
    const photo = form.photo.files[0];
    const name=user?.displayName;
    const image=user?.photoURL
    const email=user?.email
    const userInfo={
      name,
      image,
      email
    }
   // //consolelog(photo)
    const description = form.description.value;

const formData=new FormData()
formData.append('image',photo)


/* imgage post in imgbb web */
const { data } = await axios.post(image_hoisting_Api, formData);
const imgBB = data.data.display_url;

    const information = {
      classs,
      imgBB,
      description,
  userInfo
    };


/* axios secure */

const res=await axiosSecure.post('/addnewClassAdmin',information)
toast.success("succefully added")
if(res.data.inssertedId){
  toast.success("succfeully added")

}

}

const handleFormData = (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const title = form.title.value;
  const description = form.description.value;
  const image = form.image.value;
  const bookings = 0;
  const data = { name, title, description, image, bookings };
  console.log(data);

  
  axiosSecure
    .post("/fitness/newClass-forum", data)
    .then((res) => {
      if (res) {
        toast.success("Class added");
        //e.target.reset();
      }
    })
    .catch((err) => console.log(err.data));
};
  return (
    <div>
    <Helmet>
      <title>Trainer-Quest - Add classe</title>
    </Helmet>
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-4xl text-center font-semibold mb-4">
        Add New Class
      </h2>
      <form onSubmit={(e) => handleFormData(e)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            required={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            placeholder="Enter name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            required={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="title"
            type="text"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            required={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="description"
            placeholder="Enter description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image URL
          </label>
          <input
            required={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="image"
            type="text"
            placeholder="Enter image URL"
          />
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Class
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default AddNewClassAdmin;
