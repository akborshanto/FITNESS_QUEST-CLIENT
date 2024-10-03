import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../auth/Auth";
import useAxiosSecure from "../../AxiosSecure/AxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";

// const image_hoisting_key = import.meta.env.VITE_IMGBB;
// const image_hoisting_Api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;
const Register = () => {
  /* user axios secure */
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const { createUser, updateProfiles } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  {
    /* react hook form */
  }
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const password = data.password;
    const email = data.email;
    const imageFile = { image: data.image[0] };


    createUser(email, password)
      .then((res) => {
        axios
          .post(
            `https://api.imgbb.com/1/upload?key=e9b3cb55e11b48d4142caf366d77cea6`,
            imageFile,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            const image = res.data.data?.display_url;

            updateProfiles(data.name, image).then((res) => {
              const dataInfo = { name: data.name, email: data.email,image };
              console.log(data);
              axiosSecure
                .post(`/fitness/userFitness`, dataInfo)
                .then((res) => {
              
                })
                .catch((err) => {
                  console.log(err);
                });
            });

            navigate(location?.state ? location.state : "/");
            toast.success("successfully Registered");
          });
      })

      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Toaster />

      <div
        style={{
          backgroundImage:
            "Url(https://fitflex.axiomthemes.com/wp-content/uploads/2023/11/185_2-3-copyright.jpg)",
        }}
        className="bg-cover bg-center min-h-screen py-32 "
      >
        <div className="md:flex h-full w-full justify-center  container m-auto ">
          <div className="">
            <section className="">
              <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="md:w-[40vw] w-full bg-black bg-opacity-40 backdrop-blur-md duration-500 text-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                      Sign up now
                    </h1>
                    <form
                      className="space-y-4 md:space-y-6"
                      action="#"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          {...register("name", { required: true })}
                          autoComplete="name"
                          className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          placeholder="Enter your name"
                        />
                        {/*           {errors.name && (
                        <span className="text-red-500">Name is required</span>
                      )} */}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          {...register("email", { required: true })}
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          placeholder="Enter your email"
                        />
                        {/*        {errors.email && (
                        <span className="text-red-500">Email is required</span>
                      )} */}
                      </div>

                      {/* Password Field */}
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type="password"
                            name="password"
                            {...register("password", { required: true })}
                            autoComplete="current-password"
                            id="password"
                            placeholder="Enter a strong password"
                            className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          />

                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                            <button
                              type="button"
                              className="text-black hover:text-gray-700 focus:outline-none"
                            ></button>
                          </div>
                        </div>
                        {/*           {errors.password && (
                        <span className="text-red-500">
                          {errors.password.message}
                        </span>
                      )} */}
                      </div>

                      {/* Image Field */}
                      <div>
                        <label
                          htmlFor="image"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Your Image
                        </label>
                        <input
                          name="image"
                          accept="image/*"
                          {...register("image", { required: true })}
                          className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer bg-gray-50 focus:outline-none border-gray-300 placeholder-gray-400"
                          id="file_input"
                          type="file"
                        />
                        {/*       {errors.image && (
                        <span className="text-red-500">image is required</span>
                      )} */}
                      </div>

                      <button
                        type="submit"
                        className="w-full text-white font-bold bg-[#007BFF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Sign in
                      </button>
                    </form>
                    {/*     <Googlebtn /> */}
                    <div className="text-sm font-light text-white">
                      Already have an account yet?
                      <Link
                        to={"/login"}
                        className="font-medium text-info ml-1 hover:underline"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
