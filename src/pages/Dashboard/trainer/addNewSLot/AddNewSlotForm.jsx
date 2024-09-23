import { Select } from "@chakra-ui/react";
import React, { useState } from "react";
import UseButton from "../../../../component/button/Button";
import useClassAdmin from "../../../../hook/AllNewClassAdming";
import useAxiosSecure from "../../../../AxiosSecure/AxiosSecure";
import toast from "react-hot-toast";

const AddNewSlotForm = ({ newSlot, handleSubmit }) => {
  const [allClassAdmin] = useClassAdmin();
  const axiosSecure=useAxiosSecure()
  const [clas, setCla] = useState([]);
  //consolelog(allClassAdmin);
  const {
    name,
    email,
    age,
    day,
    time,
    imgBB,
    skills,
    status,
    trainerRole,
    experience,
  } = newSlot;
  //consolelog(newSlot);

  const classYoga = allClassAdmin
    ?.filter((c) => c.classs === "yoga")
    .find((item) => item.classs === "yoga");
  const classPilates = allClassAdmin
    ?.filter((c) => c.classs === "pilates")
    .find((item) => item.classs === "pilates");
  const classSpinning = allClassAdmin
    ?.filter((c) => c.classs === "spinning")
    .find((item) => item.classs === "spinning");
  const classZumba = allClassAdmin
    ?.filter((c) => c.classs === "zumba")
    .find((item) => item.classs === "zumba");

  const addNeweSlot = async(e) => {
    e.preventDefault();
    const form = e.target;

    const photo = imgBB;

    const slot = form.slot.value;
    const slotTime = form.slotTime.value;

    const information = {
      name,
      photo,
      email,
      age,
      slot,
      slotTime,
    };



/* post add new slot */
const data=await axiosSecure.post('/add-NewSlot-Trainer',information)
//consolelog(data)

if(data.status == 200){
    toast.success("succeffylly Add New SLot")
}









  };

  return (
    <div>
    <Helmet>
    <title>Workout - Add Forum</title>
  </Helmet>
  <div className="max-w-md mx-auto mt-10">
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
  );
};

export default AddNewSlotForm;
