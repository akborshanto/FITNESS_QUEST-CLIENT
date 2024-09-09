import React from "react";
import UseButton from "../../../component/button/Button";
import { Link } from "react-router-dom";
import { GrYoga } from "react-icons/gr";

const TrainerDetailCard = ({tDetail}) => {
  //consolelog(tDetail)
  const {name,skills,time,image,age,day,imgBB,experience}=tDetail || {}
  return (
    <div>
      <header class="bg-white text-black mx-auto p-6 ">
        <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <figure className="h-30">
                <img
                  src={imgBB}
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

                 
                  <span class="mx-3  text-xl font-bold">Trainer Name:{name} <span></span></span>
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

                  <span class="mx-3 text-2xl  font-bold">Experience{ tDetail?.experience}</span>
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

                  <span class="mx-3">Social Icon <GrYoga className='text-blue-400 text-xl lg:text-4xl' /></span>
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

                  <span class="mx-3 text- lg:text-3xl">
                  skills{skills?.map(item=><h1 className="text-xl font-bold text-blue-300">{item}</h1>)}
            
                  </span>
                  
                  <span class="mx-3">Availave Time{time}
                  
            
                  </span>
                  
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex items-center justify-center w-full h-96 lg:w-1/2
        "
          >
<div className="text-center">
 <h1 className="text-green-600 my-8 text-xl lg:text-2xl"> Available Slot <span className=" text-xllg:text-3xl font-bold text-blue-600">{time}</span>
</h1>


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
