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

    /* user axios secure */
    const data = await axiosSecure.post("/newsLetter", userInfo).then((res) => {
      if (res.status == 200) {
        //consolelog(res);
        toast.success("successfully sucscribe");
      }
    });
  };

  return (
    <div>

    
      <section class="bg-white dark:bg-gray-900">
        <div class="max-w-3xl px-6 py-16 mx-auto text-center">
          <h1 class="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            NEWS LETTER
          </h1>
          <p class="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">
            The fitness newsletter is a core part of your email marketing
            strategy. Learn here how you can write a variety of fitness news
            letters for your gym.
          </p>

          <form action="" onSubmit={handleSubmit}>
            <div class="">
              <div className="relative my-6">
                <input
                  id="id-b02"
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b02"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Your name
                </label>
              </div>
              <div className="relative my-6">
                <input
                  id="id-b02"
                  type="text"
                  name="email"
                  required
                  placeholder="Your Email..."
                  className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b02"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Your Email
                </label>
              </div>
            </div>
            <UseButton btnHeading="SUBSCRIBE NOW"></UseButton>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
