import React from "react";
import useAuth from "../../../../auth/Auth";
import UseButton from "../../../../component/button/Button";
import useRole from "../../../../hook/useRole";
import useAxiosSecure from "../../../../AxiosSecure/AxiosSecure";
import { toast } from "react-hot-toast";
import axios from "axios";
import UseTitle from "../../../../hook/useTitle";
const image_hoisting_key = import.meta.env.VITE_IMGBB;
const image_hoisting_Api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;
const AddNewForum = () => {
  const { user } = useAuth();
  const [role] = useRole();
  console.log(role)
  const axiosSecure = useAxiosSecure();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    //  / const trainerName = form.name.value;
    const article = form.article.value;
    const classs = form.class.value;
    const image = form.image.files[0];
    const formData = new FormData();
    //const role="member"
    formData.append("image", image);
    const { data } = await axiosSecure.post(image_hoisting_Api, formData);
const imgBB=data.data.display_url
    const userInfo = {
      role: role,
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
    };

    /* compuntirty ifu */
    const comunityInfo = {
      //trainerName,
      article,
      classs,
      userInfo,
      imgBB
    };

    /* save data  post Court Of Justice*/
    const res = await axios.post("/forum", comunityInfo);
   
    if (res.status == 200) {
      toast.success("succes");
    }
  };

  return (
    <div>
    <UseTitle heading="ADD NEW FOURM"></UseTitle>
      <section class="max-w-4xl p-6 mx-auto bg-gray-300 rounded-md shadow-md text-black">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Arti settings
        </h2>
        <header className="mb-4 flex gap-4">
          <a
            href="#"
            className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
          >
            <img
              src={user?.photoURL}
              title={user?.displayName}
              width="48"
              height="48"
              className="max-w-full rounded-full"
            />
          </a>
          <div>
            <h3 className="text-xl font-medium text-slate-700">
              {user?.displayName}
            </h3>
            <p className="text-sm text-slate-400">By {user?.displayName}</p>
          </div>
        </header>
        <form onSubmit={handleSubmit}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
            <div>
              <label class="text-gray-700 text-black" for="username">
                Article Name
              </label>
              <input
                id="username"
                type="text"
                name="class"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
              <div className="relative">
                <textarea
                  id="id-b02"
                  type="text"
                  name="article"
                  rows="10"
                  placeholder="Write your message"
                  className="peer relative w-full border-b border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                ></textarea>
                <label
                  for="id-b02"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Write your article
                </label>
              </div>
            </div>
          </div>
          <div class="flex justify-end mt-6">
            <UseButton btnHeading="Add Article"></UseButton>
          </div>
          {/*     <Link to="/payment"> 
      asdfasf
          </Link> */}
        </form>
      </section>
    </div>
  );
};

export default AddNewForum;
