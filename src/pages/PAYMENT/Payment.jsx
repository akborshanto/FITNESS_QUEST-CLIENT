// import useTheme from "../../../../hooks/useTheme"

import ReactDOM from "react-dom";
/* ==================================== */
import { Select } from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";

import UseButton from "../../component/button/Button";
import toast from "react-hot-toast";
import "./paymentCommon.css";
import useAuth from "./../../auth/Auth";
import { Elements } from "@stripe/react-stripe-js";

import ChekOutForm from "./ChekOut";
import useAxiosSecure from "../../AxiosSecure/AxiosSecure";

import { useMutation } from "@tanstack/react-query";
import { useTheme } from "@emotion/react";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import useRole from "../../hook/useRole";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51PLR8p03Qkng4Wl6PMn1whpo62R1pV6wf4UFGsJBHVtSLxVYkl5l22XAX3bQgpsYf5WaysAkXs89HKFNhBbf1hqq00okjx3Udk"
);

const Payment = () => {
  const [isDisabled, setIsDIsabled] = useState(false);
  const navigate = useNavigate();

  const [isShowing, setIsShowing] = useState(false);

  const wrapperRef = useRef(null);

  const { user } = useAuth([]);
  const [role] = useRole();
  const axiosSecure = useAxiosSecure();
  const saveData = JSON.parse(localStorage.getItem("booking"));
  const IntPrice = parseInt(saveData.price);

  /*  */
  const userInfo = {
    userName: user?.displayName,
    userEmail: user?.email,
    userPhoto: user?.photoURL,
  };
  const handleConfirm = async (e) => {
    e.preventDefault();
    const { trainerName, slot, classs, packages } = saveData;

    const role = "member";
    const inc = "total";
    const totalBooking = 0;

    const trainerBookingInfo = {
      trainerName,
      slot,
      classs,
      packages,
      userInfo,
      IntPrice,

      inc,
      totalBooking,
    };
    ////consolelog(trainerBookingInfo);
    /* axios secure */

    const data = await axiosSecure.post("/trainer-booking", trainerBookingInfo);
    //consolelog(data.data);
    if (data.data.insertedId) {
      toast.success("SUCCESSFULLY BOOKING THE THAINER");

      //navigate("/all-trainer")

      setIsDIsabled(true);
    }
  };

  /* ===🚩🚩RATING COMPONENT MODAL🚩🚩=====
================================ */

  useTheme();

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    let html = document.querySelector("html");

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden";

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        const modal = document.querySelector("#modal"); // select the modal by it's id

        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal

        const focusableContent = modal.querySelectorAll(focusableElements);

        const lastFocusableElement =
          focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

        document.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            setIsShowing(false);
          }

          let isTabPressed = e.key === "Tab" || e.keyCode === 9;

          if (!isTabPressed) {
            return;
          }

          if (e.shiftKey) {
            // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus(); // add focus for the last focusable element
              e.preventDefault();
            }
          } else {
            // if tab key is pressed
            if (document.activeElement === lastFocusableElement) {
              // if focused has reached to last focusable element then focus first focusable element after pressing tab
              firstFocusableElement.focus(); // add focus for the first focusable element
              e.preventDefault();
            }
          }
        });

        firstFocusableElement.focus();
      } else {
        html.style.overflowY = "visible";
      }
    }
  }, [isShowing]);

  /* ===🚩🚩RATING POST DASTS  will show Home Page🚩🚩=====
================================ */

  const handleRating = async (e) => {
    e.preventDefault();
    const name = user?.displayName;
    const email = user?.email;
    const photo = user?.photoURL;
    const date = new Date().toLocaleDateString();
    const descriptions = e.target.description.value;

    const ratinInfo = { name, email, photo, date, descriptions };
    /* axiiso secure */
    //   //consolelog(ratinInfo);
    await axiosSecure.post("/rating", ratinInfo).then((res) => {
      toast.success("Thanks For Feedback");
    });
  };

  return (
    <div>
      {/* PAYMENT  to Stripe */}

      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md text-black">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Account settings
        </h2>
        <Elements stripe={stripePromise}>
          <ChekOutForm IntPrice={IntPrice}></ChekOutForm>
        </Elements>

        <form onSubmit={handleConfirm}>
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
            {isDisabled ? (
              ""
            ) : (
              <button className="btn btn-info text-white w-40">Confirm</button>
            )}
          </div>
        </form>

        {/* RATING................... */}

        {/*        <!-- End Rating Card Brand --> */}
      </section>
    </div>
  );
};

export default Payment;
