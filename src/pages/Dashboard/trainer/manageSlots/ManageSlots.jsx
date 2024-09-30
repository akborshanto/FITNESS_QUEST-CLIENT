import React, { useState } from "react";
import Select from "react-select";
import { Helmet } from "react-helmet-async";

import useAuth from "../../../../auth/Auth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../AxiosSecure/AxiosSecure";
import toast from "react-hot-toast";
import useBecomeTrainerNew from "../../../../hook/useBecomeTrainerNew";

const sevenDays = [
  { value: "Sun", label: "Sunday" },
  { value: "Mon", label: "Monday" },
  { value: "Tue", label: "Tuesday" },
  { value: "Wed", label: "Wednesday" },
  { value: "Thu", label: "Thursday" },
  { value: "Fri", label: "Friday" },
  { value: "Sat", label: "Saturday" },
];
const ManageSlots = () => {
  const [classFitness, refetch, isLoading] = useBecomeTrainerNew();
  const axiosSecure = useAxiosSecure();
  const [skill, setSkill] = useState([]);
  const [day, setAvailableDay] = useState([]);
  const { user } = useAuth();
  const classNames = classFitness?.map((item) => item?.name) || [];
  const options = classNames.map((name) => ({
    value: name,
    label: name,
  }));
   
  const { data } = useQuery({
    queryKey: ["trainer-class-email", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/fitness/booked-trainser/${user?.email}`);
      return response.data;
    },
  });
  
const classes = data?.skill?.map((classItem) => classItem.label) || [];

const handleSubmit =async (e) => {
  e.preventDefault();

  // Assuming 'day' is an array of selected days
  const availableDays = day.map((day) => day.value);

  // Access the value of the specific input field for slotName
  const slotName = e.target.slotName.value;
  const slotTime = e.target.slotTime.value;


  // Creating the mSloatData object

  const slotData ={ email:user?.email ,slot:{ name: slotName, time: slotTime}};




{/*   const mSloatData = {
    name: user?.displayName,
    image:user?.photoURL,
    email: user?.email,
    day: availableDays,
   skill,
   slotName,slotTime
  }; */}

      //console.log(trainerData)
         await axiosSecure.post("/fitness/manage-slot", slotData)
         .then((res)=>{
         
         
           toast.success("Successfully manage a slot")
        e.target.reset()
         })



};




  return (
    <div>
      <div>
        <Helmet>
          <title>Fitness Quest- Add slot</title>
        </Helmet>

        <div className="w-full max-w-4xl mx-auto pb-20 bg-white shadow-lg rounded-lg overflow-hidden p-6">
          <h2 className="text-2xl font-bold mb-4">Add New Slot</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                defaultValue={user.displayName}
                readOnly
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="text"
                defaultValue={user.email}
                readOnly
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="text-black">
              <label className="block  text-sm font-bold mb-2">
                Select Days
              </label>
              <Select
                isMulti
                required
                options={sevenDays}
                onChange={setAvailableDay}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Slot Name
              </label>
              <input
                type="text"
                required
                name="slotName"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter slot name"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Slot Time
              </label>
              <input
                type="text"
                name="slotTime"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter slot time (e.g., 11:00 AM - 12:00 pm)"
              />
            </div>
            {/* classSKILL */}
          <div className="text-black">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Classes
              </label>
              <Select
                 options={options}
                isMulti
                onChange={setSkill}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div> 
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Slot
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageSlots;
