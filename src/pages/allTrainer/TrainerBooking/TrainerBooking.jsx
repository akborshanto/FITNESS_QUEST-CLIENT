import React, { useState } from "react";
import UseButton from "./../../../component/button/Button";
import { Link, useNavigate } from "react-router-dom";
import { Select } from "@chakra-ui/react";

import useAxiosSecure from "../../../AxiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";

const TrainerBooking = () => {
  const axiosSecure = useAxiosSecure();
  const handleSubmit = async (e) => {
    const navigate=useNavigate()
    e.preventDefault();
    const form = e.target;
    const trainerName = form.name.value;
    const slot = form.slot.value;
    const classs = form.class.value;
    const packages = form.package.value;

    /* BASIC PACAGEHE */

    const basicPrice = 12;
    const basic1 = "Access to gym facilities duringregular operating hours.";
    const basic12 = "Use of cardio and strength training equipment..";
    const basic13 = "Access to locker rooms and showers";
    const basicInfo = { basicPrice, basic1, basic12, basic13 };
    const Basic = packages === "basic" ? basicInfo : null;

    /* STANDARD PACKAGE */
    const standardPrice = 50;
    const standard1 = "All benefits of the basic membership.";
    const standard2 =
      "Access to group fitness classes such as yoga, spinning, and Zumbap.";
    const standard3 =
      "Use of additional amenities like a sauna or steam room..";
    const standardInfo = { standardPrice, standard1, standard2, standard3 };
    const Standard = packages === "standard" ? standardInfo : null;

    /* PREMIUM PACKAGES */
    const premiumPrice = 100;
    const premium1 = "All benefits of the standard membership.";
    const premium2 =
      "Access to personal training sessions with certified trainers.";

    const premium3 =
      "Discounts on additional services such as massage therapy or nutrition counseling.";

    const premiumInfo = { premiumPrice, premium1, premium2, premium3 };
    const Premium = packages === "premium" ? premiumInfo : null;
    // console.log(Premium)
    const bookingInfo = {
      trainerName,
      slot,
      classs,
      packages,
      Basic,
      Premium,
      Standard,
    };

    /*  TANSCTACK QUERY*/

    /* use axios secure */

    const res = await axiosSecure.post("/trainer-booking", bookingInfo)

  }
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
                type="text"
                name="name"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 text-black" for="emailAddress">
                Selected slot
              </label>

              <Select placeholder="Select option" name="slot">
                <option value="yoga">Yoga</option>
                <option value="pilates">pilates</option>
                <option value="spinning">spinning</option>
                <option value="zumba">zumba</option>
              </Select>
            </div>

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

            <div>
              <label
                class="text-gray-700 text-black"
                for="passwordConfirmation"
              >
                packages:
              </label>

              <Select placeholder="Select packages" name="package">
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </Select>
            </div>
          </div>

          <div class="flex justify-end mt-6">
        
            <Link to="/payment">
       <UseButton btnHeading="JOIN NOW"></UseButton>
           
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default TrainerBooking;
