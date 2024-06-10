import React, { useState } from "react";
import UseButton from "./../../../component/button/Button";
import { Link, json, useNavigate } from "react-router-dom";
import { Select } from "@chakra-ui/react";

import useAxiosSecure from "../../../AxiosSecure/AxiosSecure";

const TrainerBooking = () => {
  const navigate=useNavigate()
  const axiosSecure = useAxiosSecure();
  const [booking,setBooking]=useState()
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = e.target;
    const trainerName = form.name.value;
    const slot = form.slot.value;
    const classs = form.class.value;
    const packages = form.package.value;
    const price = form.price.value;

  //   if(packages === "basic") return  ;

  // if(packages === "premium") return   ;

  // if(packages === "standard") return   ;


    /* BASIC PACAGEHE */

    const basicPrice = 12;
    const basic1 = "Access to gym facilities duringregular operating hours.";
    const basic12 = "Use of cardio and strength training equipment..";
    const basic13 = "Access to locker rooms and showers";
    const basicInfo = { packages,basicPrice, basic1, basic12, basic13 };

    // const Basic = packages === "basic" ? basicInfo : null;

    /* STANDARD PACKAGE */
    const standardPrice = 50;
    const standard1 = "All benefits of the basic membership.";
    const standard2 =
      "Access to group fitness classes such as yoga, spinning, and Zumbap.";
    const standard3 =
      "Use of additional amenities like a sauna or steam room..";
    const standardInfo = { packages,standardPrice, standard1, standard2, standard3 };
    //const Standard = packages === "standard" ? standardInfo : null;

    /* PREMIUM PACKAGES */
    const premiumPrice = 100;
    const premium1 = "All benefits of the standard membership.";
    const premium2 =
      "Access to personal training sessions with certified trainers.";

    const premium3 =
      "Discounts on additional services such as massage therapy or nutrition counseling.";

    const premiumInfo = {packages, premiumPrice, premium1, premium2, premium3 };

    // const Premium = packages === "premium" ? premiumInfo : null;
    // console.log(Premium)

    const bookingInfo = {
      trainerName,
      slot,
      classs,
      packages,
      price

      
  
    };

 



const saveData= localStorage.setItem('booking',JSON.stringify(bookingInfo))

    /*  TANSCTACK QUERY*/
navigate('/payment')
    /* use axios secure */

    //const res = await axiosSecure.post("/trainer-booking", bookingInfo);

  };
  return (
    <div>
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md text-black">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Account settings
        </h2>

        <form onSubmit={handleSubmit}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 text-black" for="username">
                Trainer Name
              </label>
              <input
                id="username"
                type="text" required
                name="name"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 text-black" for="emailAddress">
                Selected slot
              </label>

              <Select placeholder="Select option" name="slot" required>
                <option value="morning">morning</option>
                <option value="noon">noon</option>
                <option value="afternoon">afternoon</option>
                <option value="night">night</option>
              </Select>
            </div>
            <div>
              <label class="text-gray-700 text-black" for="emailAddress">
                Price
              </label>

              <Select placeholder="Select Price" name="price" required>
                <option value="10">$10</option>
                <option value="50">50</option>
                <option value="100">100</option>
              
              </Select>
            </div>

            <div>
              <label class="text-gray-700 text-black" for="password">
                Classes
              </label>

              <Select placeholder="Select option" name="class" required>
                <option value="yoga">Yoga</option>
                <option value="pilates">pilates</option>
                <option value="spinning">spinning</option>
                <option value="zumba">zumba</option>
              </Select>
            </div>

            <div>
              <label
                class="text-gray-700 text-black"
                for="passwordConfirmation"
              >
                packages:
              </label>

              <Select placeholder="Select packages" name="package" required>
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </Select>
            </div>
          </div>

          <div class="flex justify-end mt-6">
         <UseButton btnHeading='Join Now'></UseButton>
          </div>
      {/*     <Link to="/payment"> 
      asdfasf
          </Link> */}
        </form>
      </section>
    </div>
  );
};

export default TrainerBooking;
