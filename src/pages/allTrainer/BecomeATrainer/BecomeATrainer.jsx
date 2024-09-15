import React, { useState } from "react";

import UseButton from "../../../component/button/Button";
import { Link } from "react-router-dom";
import useAuth from "../../../auth/Auth";
import useAxiosSecure from "../../../AxiosSecure/AxiosSecure";
import axios from "axios";
import toast from "react-hot-toast";
import useRole from "../../../hook/useRole";

//import Select from 'react-select';

import Select from "react-select";

const sevenDays = [
  { value: "Sun", label: "Sunday" },
    { value: "Mon", label: "Monday" },
    { value: "Tue", label: "Tuesday" },
    { value: "Wed", label: "Wednesday" },
    { value: "Thu", label: "Thursday" },
    { value: "Fri", label: "Friday" },
    { value: "Sat", label: "Saturday" },
];
const skill = [
  { value: "yoga", label: "yoga" },
  { value: "Surgery", label: "Surgery" },
  { value: "Balance", label: "Balance" },
  { value: "LUMBSA", label: "LUMBSA" },
  { value: "SUMBA", label: "LUMBSA" },
  { value: "KDKSF", label: "TLUMBSAhursDay" },
  { value: "dsafsa", label: "FrLUMBSAiday" },
];

/* const IMG BB */
const image_hoisting_key = import.meta.env.VITE_IMGBB;
const image_hoisting_Api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;
const BecomeATrainer = () => {
  const [ability, setAbilit] = useState();

  const [day, setDay] = useState();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // const [role] = useRole();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const experience = form.experience.value;
    const time = form.time.value;
    const status = "pending";

    /* all user info */

    //consolelog(allBecomeTrainerInfo)
    // const  selectDate=form.slectDate.value;
    /* user axios secure  */

    // const res = await axiosSecure.post("/become-trainer", allBecomeTrainerInfo);
    // //consolelog(res)
    // if (res.data.insertedId) {
    //   toast.success("Succesfully Reequest For Be A Traiener");
    // }

    /*===================================== */
    const trainerData = {
      name: user.name,
      email: user.email,
      day,
      time,
      experience,
      skill,
    };
    console.log(trainerData);

    const res = await axiosSecure.post("/fitness/trainer", trainerData)
    console.log(res.data)
  };
  // const specialties = skills.map((skill) => skill.value);
  return (
    <div>
      <section class="max-w-4xl p-6 mx-auto bg-black text-white rounded-md shadow-md text-black">
        <h2 class="text-lg font-semibold text-white capitalize dark:text-white">
          Account settings
        </h2>

        <form onSubmit={handleSubmit}>
          <h1>{user?.displayName}</h1>
          <h1>{user?.email}</h1>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* image */}

            {/* EXPERIENCE */}

            <div>
              <label class="text-white " for="emailAddress">
                Experience
              </label>

              <input
                id="username"
                required
                type="number"
                name="experience"
                class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md text-black  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            {/* DAY WITHOUT REACT SELECT */}

            <div>
              <label class="text-white k" for="password">
                Availabe Day in a Week
              </label>
              <Select
                isMulti
                name="day"
                options={sevenDays}
                onChange={setDay}
                className="basic-multi-select   bg-blue-400 select-info w-full text-black"
                classNamePrefix="select"
              />
            </div>
            {/* Available time in a day */}

            <div>
              <label class=" text-white" for="password">
                Availabe Time in a Week
              </label>

              <input
                required
                id="username"
                type="number"
                name="time"
                class="block text-blue-600 font-bold border w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            {/* skills */}

            <div>
              <div class="relative flex flex-wrap items-center  gap-4">
                <h1 className=" px-4">SKills</h1>
                <br />
                <Select
                  required={true}
                  options={skill}
                  onChange={setAbilit}
                  isMulti
                  className="focus:ring-2 focus:ring-blue-600 text-black"
                />
              </div>
            </div>
            {/*  */}
          </div>

          <div class="flex justify-end mt-6">
            <button className="btn btn-info text-white font-bold text-xl">
              Applied
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BecomeATrainer;
