import React from "react";
import UseButton from "../../../component/button/Button";
import useAxiosSecure from "../../../AxiosSecure/AxiosSecure";
import { toast } from "react-hot-toast";
import useAuth from './../../../auth/Auth';

const NewsLetter = () => {
  const axiosSecure = useAxiosSecure();
  const user=useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const userInfo = {
      name,
      email,
    img:user?.photoURL
    };
console.log(userInfo)
    /* user axios secure */
    const data = await axiosSecure.post("/fitness/subsciber", userInfo).then((res) => {
      if (res.status == 200) {
      // console.log(res.data);
  
        toast.success("successfully sucscribe");
        e.target.reset()
      }
    });
  };

  return (

    <div className="mx-auto w-full  ">









    
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl  sm:px-24 xl:py-32">
      <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Stay Informed
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
        Stay up-to-date with the latest from SecureCloud! Join our mailing
        list for exclusive updates and insights.
      </p>

      <form
      onSubmit={handleSubmit}
        className="mx-auto mt-10 flex max-w-md gap-x-4 lg:flex-row flex-col gap-2"
      >
        <div className=" w-full">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
      
            className="min-w-0 w-full flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            placeholder="Enter your name"
          />
        </div>
        <div className=" w-full">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
       name="email"
            type="email"
            autoComplete="email"
            required
    
            className="min-w-0 w-full flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
        </div>

        <button
          type="submit"
          className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Notify me
        </button>
      </form>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#gradient)"
          fillOpacity="0.7"
        ></circle>
        <defs>
          <radialGradient
            id="gradient"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stopColor="#7775D6"></stop>
            <stop offset="1" stopColor="#007BFF" stopOpacity="0"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>

  );
};

export default NewsLetter;
