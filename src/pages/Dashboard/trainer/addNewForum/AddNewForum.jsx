import React, { useState } from "react";
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
  const [text, setText] = useState("");

  //consolelog(role)
  const axiosSecure = useAxiosSecure();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { text };
    //  / const trainerName = form.name.value;

    /* save data  post Court Of Justice*/
    const res = await axiosSecure.post("/fitness/forumFitness", data);
    //consolelog(res.data)
    if (res.status == 200) {
      toast.success("Forum Added Successfully");
    }
  };
  console.log(text);
  return (
    <div>
      <UseTitle heading="ADD NEW FOURM"></UseTitle>

      <div>
        {/*     <Helmet>
    <title>FITNESS_QUEST- Add Forum</title>
  </Helmet> */}
        <div className="max-w-md mx-auto mt-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Submit Your Text
            </h2>
            <div className="mb-4">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your text here..."
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewForum;
