import { Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UseButton from "../../component/button/Button";
import toast from "react-hot-toast";
import "./paymentCommon.css";
import useAuth from "./../../auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ChekOutForm from "./ChekOut";

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE}`);

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const Payment = () => {
  const { user } = useAuth([]);
 
  const saveData = JSON.parse(localStorage.getItem("booking"));
















  const handleConfirm = (e) => {
    e.preventDefault();

    toast.success("succefully payment");
  
  };

  return (
    <div>
 
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md text-black">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Account settings
        </h2>

        <form onSubmit={handleConfirm}>

     {/* PAYMENT  to Stripe */}

     <Elements stripe={stripePromise}>
     <ChekOutForm price={saveData.price}></ChekOutForm>
   </Elements>




          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 text-black" for="username">
                Trainer Name
              </label>
              <input
                id="username"
                type="text"
                name="name"
                disabled
                defaultValue={saveData?.trainerName}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 text-black" for="emailAddress">
                Selected Class
              </label>

              <Select placeholder={saveData?.classs} name="slot" disabled>
                <option value="yoga">Yoga</option>
                <option value="pilates">pilates</option>
                <option value="spinning">spinning</option>
                <option value="zumba">zumba</option>
              </Select>
            </div>

            <div>
              <label class="text-gray-700 text-black" for="password">
                Packages
              </label>

              <Select placeholder={saveData?.packages} disabled name="class">
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </Select>
            </div>

            <div>
              <label
                class="text-gray-700 text-black"
                for="passwordConfirmation"
              >
                Slected Slots
              </label>

              <Select placeholder={saveData.slot} disabled name="package">
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

              <Select placeholder={saveData.price} disabled name="price">
                <option value="10">$10</option>
                <option value="50">50</option>
                <option value="100">100</option>
              
              </Select>
            </div>

            {/* user info */}
            <div>
              <label class="text-gray-700 text-black" for="username">
                Your Name
              </label>
              <input
                id="username"
                disabled
                type="text"
                placeholder={user?.displayName || "your name"}
                name="yourname"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-700 text-black" for="username">
                Your Email
              </label>
              <input
                id="username"
                disabled
                type="email"
                placeholder={user?.email || " your email"}
                name="email"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <UseButton btnHeading="Confirm"></UseButton>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Payment;
