import React from "react";
import UseButton from "../../../component/button/Button";
import { Link } from "react-router-dom";

const TrainerDetailCard = () => {
  return (
    <div>
      <header class="bg-white text-black">
        <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <figure className="h-30">
                <img
                  src="https://picsum.photos/id/493/800/600"
                  alt="card asfdsafimage"
                  className="aspect-video w-full  "
                />
              </figure>
              <div class="grid gap-6 mt-8 sm:grid-cols-2">
                <div class="flex items-center text-gray-800 -px-3 -200">
                  <svg
                    class="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span class="mx-3">Trainer Name</span>
                </div>

                <div class="flex items-center  -px-3 -200">
                  <svg
                    class="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span class="mx-3">Details</span>
                </div>

                <div class="flex items-center text-gray-800 -px-3 -200">
                  <svg
                    class="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span class="mx-3">Expertise</span>
                </div>

                <div class="flex items-center text-gray-800 -px-3 -200">
                  <svg
                    class="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span class="mx-3">Social Icon</span>
                </div>

                <div class="flex items-center text-gray-800 -px-3 -200">
                  <svg
                    class="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span class="mx-3">Availave Slot</span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex items-center justify-center w-full h-96 lg:w-1/2
        "
          >
<div className="text-center">
 <h1 className="text-green-600 my-8 text-xl lg:text-6xl"> Aviailabel Slot</h1>

{/* TIME TRAINER FREEE */}

<h1 className="text-2xl text-red-400 mb-6" >Trainer Slot Time</h1>


<Link to="/trainer-booking">
<UseButton btnHeading="Available Slot"></UseButton>
</Link>
</div>


          </div>
        </div>
      </header>
    </div>
  );
};

export default TrainerDetailCard;
