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
import { loadStripe } from "@stripe/stripe-js";
import ChekOutForm from "./ChekOut";
import useAxiosSecure from "../../AxiosSecure/AxiosSecure";

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE}`);
import { useMutation } from "@tanstack/react-query";
import { useTheme } from "@emotion/react";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const Payment = () => {
  const { user } = useAuth([]);
  const axiosSecure = useAxiosSecure();
  const saveData = JSON.parse(localStorage.getItem("booking"));
  const { trainerName, slot, classs, packages, price } = saveData;

  /*  */
  const userInfo = {
    userName: user?.displayName,
    userEmail: user?.email,
    userPhoto: user?.photoURL,
  };
  const handleConfirm = async (e) => {
    e.preventDefault();
    const IntPrice = parseInt(price);
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
      role,

      inc,
      totalBooking,
    };
    console.log(trainerBookingInfo);
    /* axios secure */

    const data = await axiosSecure.post("/trainer-booking", trainerBookingInfo);

    if (data.status == 200) {
      toast.success("succefuly Payment");
    }

    console.log(data);
  };

  /* ===🚩🚩RATING COMPONENT MODAL🚩🚩=====
================================ */

  const [isShowing, setIsShowing] = useState(false);

  const wrapperRef = useRef(null);

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
    console.log(ratinInfo);
    const res = await axiosSecure.post("/rating", ratinInfo);
  };

  return (
    <div>
      {/* PAYMENT  to Stripe */}

      {/*     <Elements stripe={stripePromise}>
      <ChekOutForm price={price}></ChekOutForm>
    </Elements>
 */}
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md text-black">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Account settings
        </h2>

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
            <UseButton btnHeading="Confirm"></UseButton>
          </div>
        </form>

        {/* RATING................... */}

        <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
          <div className="p-6">
            <div className="flex flex-col items-center gap-4">
              {/*              <!-- Brand --> */}

              <button>
                <button
                  onClick={() => setIsShowing(true)}
                  className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                >
                  <span>Reviews⭐</span>
                </button>
              </button>

              {/*              <!-- Rating --> */}

              {/*              <!-- Helper text --> */}
            </div>
          </div>
        </div>
        {/*        <!-- End Rating Card Brand --> */}
      </section>

      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
              aria-labelledby="header-4a content-4a"
              aria-modal="true"
              tabindex="-1"
              role="dialog"
            >
              {/*    <!-- Modal --> */}
              <div
                ref={wrapperRef}
                className="flex max-h-[90vh] max-w-sm flex-col gap-4 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                id="modal"
                role="document"
              >
                {/*        <!-- Modal header --> */}
                <header id="header-4a" className="flex items-center">
                  <h3 className="flex-1 text-lg font-medium text-slate-700">
                    Welcome back!
                  </h3>
                  <button
                    onClick={() => setIsShowing(false)}
                    className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                    aria-label="close dialog"
                  >
                    <span className="relative only:-mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="title-79 desc-79"
                      >
                        <title id="title-79">Icon title</title>
                        <desc id="desc-79">
                          A more detailed description of the icon
                        </desc>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </header>

                <form onSubmit={handleRating}>
                  {/*        <!-- Modal body --> */}
                  <div id="content-4a" className="flex-1">
                    <div className="flex flex-col gap-6">
                      {/*                <!-- Input field --> */}
                      <div id="content-4a" className="flex-1">
                        <div className="flex flex-col gap-6">
                          {/*                <!-- Input field --> */}

                          <div className="relative">
                            <textarea
                              id="id-b02"
                              type="text"
                              name="description"
                              rows="3"
                              placeholder="Write your message"
                              className="peer relative w-full border-b border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            ></textarea>
                            <label
                              for="id-b02"
                              className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                              Write your message
                            </label>
                          </div>
                          {/*<!-- End Plain base size basic textarea --> */}
                        </div>
                      </div>
                      {/*                <!-- Input field --> */}
                    </div>
                  </div>
                  {/*        <!-- Modal actions --> */}
                  <div className="flex justify-center gap-2">
                    <button
                      onSubmit={handleRating}
                      className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                    >
                      <span>Click</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>,
            document.body
          )
        : null}
    </div>
  );
};

export default Payment;
