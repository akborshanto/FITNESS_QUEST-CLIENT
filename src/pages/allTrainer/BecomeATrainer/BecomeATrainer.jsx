
import React, { useState } from "react";

import UseButton from "../../../component/button/Button";
import { Link } from "react-router-dom";
import useAuth from "../../../auth/Auth";
import useAxiosSecure from "../../../AxiosSecure/AxiosSecure";
import axios from "axios";
import toast from "react-hot-toast";
import useRole from "../../../hook/useRole";
import select from 'react-select';
//import Select from 'react-select';

import { Select } from "@chakra-ui/react";


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
/* const IMG BB */
const image_hoisting_key = import.meta.env.VITE_IMGBB;
const image_hoisting_Api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;
const BecomeATrainer = () => {
  

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [role]=useRole()


  const handleSubmit = async (e) => {
 
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const age = form.age.value;
    const day = form.day.value;
    const time = form.time.value;
    const image = form.photo.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const status = "pending";
    const trainerRole= role

//const role="Trainer"
    /* skills */
    const emphaty = form.emphaty.value;
    const timeManagement = form.timeManagement.value;
    const business = form.business.value;
    const physical = form.physical.value;
    const experience = form.experience.value;
    const skills =  [emphaty, timeManagement, business, physical ];

    /* Using  AXios secure post method IMG BB  */
    const { data } = await axios.post(image_hoisting_Api, formData);
    const imgBB = data.data.display_url;
    /* all user info */
    const allBecomeTrainerInfo = {
      name,
      email,
      age,
      day,
      time,
      imgBB,
      skills,
      status,
      trainerRole,
      experience
    };
 
    // const  selectDate=form.slectDate.value;
    /* user axios secure  */
await axios
      .post("/become-trainer", allBecomeTrainerInfo)
  
      if(data.insertedId){
        toast.success("Succesfully Reequest For Be A Traiener")
      }
      

  };

  return (
    <div>
{/*     <Select
    defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name="colors"
    options={colourOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  /> */}
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md text-black">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Account settings
        </h2>

        <form onSubmit={handleSubmit}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 text-black" for="username">
                Full Name
              </label>
              <input
                id="username" aria-required
                type="text"
                required
                name="name"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md text-black  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-700 text-black" for="username">
                Email
              </label>
              <input
                disabled
                id="username" required
                placeholder={user?.email || "your email"}
                type="text"
                name="email"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md text-black  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 text-black" for="emailAddress">
                AGE
              </label>

              <Select placeholder="Select Age" name="age" required>
                <option value="30">30 </option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="55">55</option>
              </Select>
            </div>
            {/* image */}
            <div>
              <label class="text-gray-700 text-black" for="username">
                Upload Image
              </label>
              <input required
                id="username"
                type="file"
                name="photo"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md text-black  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

{/* EXPERIENCE */}

<div>
<label class="text-gray-700 text-black" for="emailAddress">
  Experience
</label>

<input
id="username" required
type="number"
name="experience"
class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md text-black  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
/>
</div>



     
            {/* DAY WITHOUT REACT SELECT */}

            <div>
              <label class="text-gray-700 text-black" for="password">
                Availabe Day in a Week
              </label>

              <Select placeholder="Select Day" name="day" required>
                <option value="saturday">saturday</option>
                <option value="sunday">sunday</option>
                <option value="monday">monday</option>
                <option value="tuesday">tuesday</option>
                <option value="wednesday">wednesday</option>
                <option value="thursday">thursday</option>
                <option value="friday">friday</option>
              </Select>
            </div>
            {/* Available time in a day */}

            <div>
              <label class="text-gray-700 text-black" for="password">
                Availabe Time in a Week
              </label>

              <Select placeholder="Select slot" name="time" required>
                <option value="Morning">Morning</option>
       
                <option value="Noon">Noon</option>
       
                <option value="AfterNoon">AfterNoon</option>
       
                <option value="Night">Night</option>
       
              </Select>
            </div>

            {/* skills */}

            <div  >
            <div class="relative flex flex-wrap items-center  gap-4">
            <h1 className=" px-4">SKills</h1>
            <br />


<div>

<input
class="w-4 h-4 transition-colors bg-white border-2 rounded appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-200 checked:hover:border-emerald-600 checked:hover:bg-emerald-300 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-400 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
type="checkbox"
id="id-c04"
name="emphaty" 
value="emphaty"
/>
<label
class="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
for="id-c04"
>
Emphaty
</label>
<input
value="timemanagement"
class="w-4 h-4 transition-colors bg-white border-2 rounded appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-200 checked:hover:border-emerald-600 checked:hover:bg-emerald-300 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-400 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
type="checkbox"
id="id-c04" 
name="timeManagement"
/>
<label
class="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
for="id-c04"
>
Time management
</label>

</div>
<div>

</div>
        
            <br />
          </div>
          <div class="relative flex flex-wrap items-center">
            <br />
            <input
              name="business"
              value="business" 
              class="w-4 h-4 transition-colors bg-white border-2 rounded appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-200 checked:hover:border-emerald-600 checked:hover:bg-emerald-300 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-400 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
              type="checkbox"
              id="id-c04"
            />
            <label
              class="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
              for="id-c04"
            >
              Business skills
            </label>
            <input
              class="w-4 h-4 transition-colors bg-white border-2 rounded appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-200 checked:hover:border-emerald-600 checked:hover:bg-emerald-300 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-400 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
              type="checkbox"
              id="id-c04"
              name="physical" 
              value="physical"
            />
            <label
              class="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
              for="id-c04"
            >
              physical skills
            </label>{" "}
            <br />
          </div>

            </div>
            {/*  */}
          </div>

          <div class="flex justify-end mt-6">
            <UseButton btnHeading="Applied "></UseButton>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BecomeATrainer;
