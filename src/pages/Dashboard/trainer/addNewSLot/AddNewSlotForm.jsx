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
  console.log(allClassAdmin);
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
  console.log(newSlot);

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
console.log(data)

if(data.status == 200){
    toast.success("succeffylly Add New SLot")
}









  };

  return (
    <div>
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md text-black">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Account settings
        </h2>

        <form onSubmit={addNeweSlot}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 text-black" for="username">
                Full Name
              </label>
              <input
                id="username"
                type="text"
                defaultValue={name}
                placeholder={name}
                name="name"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-700 text-black" for="username">
                Email
              </label>
              <input
                disabled
                id="username"
                placeholder={email}
                type="text"
                name="email"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 text-black" for="emailAddress">
                AGE
              </label>

              <Select placeholder={age} name="age" defaultValue={age} disabled>
                <option value="30">30 </option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="55">55</option>
              </Select>
            </div>
            {/* image */}

            {/* EXPERIENCE */}

            {/* skills */}

            <div>
              <div class="relative flex flex-wrap items-center">
                <h1 className=" px-4">Admin Addedd Classs</h1>
                <br />
                <input
                  class="w-4 h-4 transition-colors bg-white border-2 rounded appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-200 checked:hover:border-emerald-600 checked:hover:bg-emerald-300 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-400 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                  type="checkbox"
                  id="id-c04"
                  name="yoga"
                  value="yoga"
                />
                <label
                  class="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                  for="id-c04"
                >
                  Yoga
                </label>
                <input
                  value="spinning"
                  class="w-4 h-4 transition-colors bg-white border-2 rounded appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-200 checked:hover:border-emerald-600 checked:hover:bg-emerald-300 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-400 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                  type="checkbox"
                  id="id-c04"
                  name="spinning"
                />
                <label
                  class="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                  for="id-c04"
                >
                  SPinning
                </label>
                <br />
              </div>
              <div class="relative flex flex-wrap items-center">
                <br />
                <input
                  class="w-4 h-4 transition-colors bg-white border-2 rounded appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-200 checked:hover:border-emerald-600 checked:hover:bg-emerald-300 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-400 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                  type="checkbox"
                  id="id-c04"
                  name="pilates"
                  value="pilates"
                />
                <label
                  class="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                  for="id-c04"
                >
                  Pilates
                </label>{" "}
                <br />
              </div>
              <div class="relative flex flex-wrap items-center">
                <br />
                <input
                  class="w-4 h-4 transition-colors bg-white border-2 rounded appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 checked:border-emerald-500 checked:bg-emerald-200 checked:hover:border-emerald-600 checked:hover:bg-emerald-300 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-400 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                  type="checkbox"
                  id="id-c04"
                  name="zumba"
                  value="zumba"
                />
                <label
                  class="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                  for="id-c04"
                >
                  Zumba
                </label>{" "}
                <br />
              </div>
            </div>

            {/* DAY WITHOUT REACT SELECT */}

            <div>
              <label class="text-gray-700 text-black" for="password">
                Availabe Day in a Week
              </label>

              <Select placeholder={day} name="day" defaultValue={day} disabled>
                <option value="saturday">saturday</option>
                <option value="sunday">sunday</option>
                <option value="monday">monday</option>
                <option value="tuesday">tuesday</option>
                <option value="wednesday">wednesday</option>
                <option value="thursday">thursday</option>
                <option value="friday">friday</option>
              </Select>
            </div>

            {/*  */}
          </div>

          {/* slot */}

          <div>
            <label class="text-gray-700 text-black" for="password">
              Slot Time
            </label>

            <Select placeholder="Select slot" name="slotTime">
              <option value="4Hour">4Hour</option>
              <option value="6Hour">6Hour</option>
              <option value="8Hour">8Hour</option>
              <option value="10Hour">10Hour</option>
            </Select>
          </div>
          <div>
            <label class="text-gray-700 text-black" for="password">
              Slot
            </label>

            <Select placeholder="Select slot" name="slot">
              <option value="Morning">Morning</option>

              <option value="Noon">Noon</option>

              <option value="AfterNoon">AfterNoon</option>

              <option value="Night">Night</option>
            </Select>
          </div>

          <div class="flex justify-end mt-6">
            <UseButton btnHeading="Add  Slot "></UseButton>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddNewSlotForm;
