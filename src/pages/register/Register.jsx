import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../auth/Auth";
import useAxiosSecure from "../../AxiosSecure/AxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const image_hoisting_key = import.meta.env.VITE_IMGBB;
const image_hoisting_Api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;
const Register = () => {
  /* user axios secure */
  const axiosSecure = useAxiosSecure();

  const { createUser, updateProfiles } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    console.log(email,password,image)
   
    const name = form.name.value;
      const formData = new FormData();

      //const role="member"
      formData.append("image", image);
     console.log(formData)

    /* POST  METHOD IMG BB */
// console.log({image:form.image.files[0]})

// fetch(image_hoisting_Api,{
//   method:"POST",
//   headers:{'content-type': 'multipart/form-'}
// })

    const { data } = await axios.post(image_hoisting_Api, formData,{
      headers:{"content-type": "multipart/form-data" },
    });
    // {
    //   headers: { "content-type": "multipart/form-data" },
    // }
    console.log(data);
    createUser(email, password).then((res) => {
      toast.success("successfull create a user");
      /* update profile */
      if (res.user) {
        updateProfiles(name, data.data.display_url).then((res) => {
          toast.success("succesfully Register");
        const info={
          name:name,
          email:email,
          role:"member"
        }
        const data = axiosSecure.post('/moduleUser',info)

        });
      }
    });

    if (data.success) {

  
      



    }




  };

  return (
    <div>
      <Toaster />
      <div className="flex justify-center items-center min-h-screen my-6 lg:my-4">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
            <p className="text-sm text-gray-400">Welcome to StayVista</p>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-500 w-full rounded-md py-3 text-white"
              >
                Continue
              </button>
            </div>
          </form>

          <p className="px-6 text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="hover:underline hover:text-rose-500 text-gray-600"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
