import { Select } from "@chakra-ui/react";
import React from "react";
import UseButton from "../../../../component/button/Button";
import useAxiosSecure from "../../../../AxiosSecure/AxiosSecure";
import axios from "axios";
import toast from "react-hot-toast";
const image_hoisting_key = import.meta.env.VITE_IMGBB;
const image_hoisting_Api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;
const AddNewClassAdmin = () => {
  const axiosSecure=useAxiosSecure()
  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const classs = form.class.value;
    const photo = form.photo.files[0];
   // console.log(photo)
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
    };



/* axios secure */

await axiosSecure.post('/addnewClassAdmin',information)
.then(res=>{


if(res.status === 200){
  toast.success("succfeully added")
}

  });
}
  return (
    <div>
      <div>
        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md text-black">
          <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Account settings
          </h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label class="text-gray-700 text-black" for="password">
                Classes
              </label>

              <Select placeholder="Select option" name="class">
                <option value="yoga">Yoga</option>
                <option value="pilates">pilates</option>
                <option value="spinning">spinning</option>
                <option value="zumba">zumba</option>
              </Select>
            </div>
            {/* image */}
            <div>
              <label class="text-gray-700 text-black" for="username">
                Upload Image
              </label>
              <input
                id="username"
                type="file"
                name="photo"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="my-6">
              <div className="relative">
                <textarea
                  id="id-b02"
                  type="text"
                  name="description"
                  rows="3"
                  placeholder="Write your Descripiton"
                  className="peer relative w-full border-b border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                ></textarea>
                <label
                  for="id-b02"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Descriptoin
                </label>
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <UseButton btnHeading="Submit "></UseButton>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddNewClassAdmin;
