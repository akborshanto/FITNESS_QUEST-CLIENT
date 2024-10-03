import React from "react";
//import UseButton from "../../../component/button/Button";
import { Link } from "react-router-dom";
import { GrYoga } from "react-icons/gr";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../AxiosSecure/AxiosSecure";

const TrainerDetailCard = ({ tDetail, manageSlot, isLoading }) => {
  //consolelog(tDetail)

  const {_id, name, skill, image, experience, day ,slots} = tDetail || {};


  const {data:bookingData}=useQuery({
    queryKey:['trainer-booking-data'],
    queryFn:async ()=>{

        const {data}=await axiosSecure.get(`/fitness/single-slot/${_id}`)

        return data
    }
})

  return (
    <div>
      <div className="min-h-screen  bg-[#141414]">
    <Helmet>
        <title>Fitness - Trainer Details Page</title>
      </Helmet> 
        <div className="">
          <div className="relative pt-28 pb-10 w-full space-y-4">
            <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
              trainer
              <span className="text-[#007BFF]"> details</span>
            </h1>
          </div>
          {/*        {isLoading ? (
          <div className="min-h-screen w-full flex items-center justify-center">
            <ReactLoading
              type={"spin"}
              color={"#007BFF"}
              height={50}
              width={50}
            />
          </div>
        ) : ( */}
          <div className="md:p-0 p-10">
            <section className=" text-white bg-[#11101054] rounded-lg  container m-auto ">
              <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7 ">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                    {name}
                  </h1>
                  <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-6xl">
                    {experience}+ Year Experience
                  </h1>
                  <div className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg   lg:text-xl">
                    Fitness is not about being better than someone else. It's
                    about being better than you used to be.
                  </div>
                  <div>
                    <span className="font-bold lg:mb-8 md:text-lg   lg:text-xl">
                      Specialties:
                    </span>
                    <ul className="list-disc list-inside ml-3">
                      {skill?.map((specialty, index) => (
                        <li key={index} className="ml-2">
                          {specialty.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className=" lg:mt-0 lg:col-span-5 lg:flex mt-4 md:mt-0">
                  <img src={image} alt="mockup" className="rounded-lg" />
                </div>
              </div>
            </section>
            {/*            {applictionBecameTrainer ? (
              ""
            ) : ( */}
            <div className="flex justify-center mt-10">
              <Link to="/become-trainer">
                <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                  <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                  <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                  <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                  <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                  <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                  <p className="z-10">Become a Trainer</p>
                </button>
              </Link>
            </div>

            <section className="bg-transparent text-white container m-auto">
              <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className=" hidden lg:mt-0 lg:col-span-5 lg:flex mt-4 md:mt-0">
                  <img
                    src="https://www.graduateprogram.org/wp-content/uploads/2023/01/Jan-17-How-Schools-are-Revamping-Gym-Classes_web-1024x683.jpg"
                    alt="mockup"
                    className=" object-contain"
                  />
                </div>
                <div className="mr-auto place-self-center lg:col-span-7 md:pl-10 pl-0 ">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                    Class Schedule :
                  </h1>
                  <div className="">
                    <h1 className="max-w-2xl mb-2 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">
                      Available days :
                    </h1>
                    <ul className=" flex text-xl font-bold mb-4 ">
                      {day?.map((availableDay, index) => (
                        <li key={index} className="ml-2">
                          {availableDay?.label}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="">
                    <span className="font-bold lg:mb-8 md:text-lg   lg:text-xl">
                      Specialties:
                    </span>
                    <table className="table-auto w-full rounded-lg shadow-md overflow-hidden ">
                      <thead>
                        <tr className="bg-[#ffffffaf] text-left text-xs font-medium uppercase text-black">
                          <th className="px-4 py-2">Slot Name</th>
                          <th className="px-4 py-2">Time</th>
                          <th className="px-4 py-2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {slots?.map((slot) => ( 
                        <tr className="border-b hover:bg-[#ffffff15]">
                          <td className="px-4 py-4">{slot.name}</td>
                          <td className="px-4 py-4">{slot.time}</td>

                          <td className="px-4 py-4">
                            <Link to={`/trainer-booking/${_id}?slot=${slot.name}`}>
                              <button       onClick={book}
                              disabled={selectedCardPrice === 0 && selectedClass === ""}
                              className={`${
                                selectedCardPrice === 0 || selectedClass === ""
                                  ? "bg-gray-400 cursor-not-allowed"
                                  : "bg-blue-500 hover:bg-blue-700"
                              } text-white font-bold py-2 px-4 rounded`}
                            >
                            Join Now 
                              </button>
                            </Link>
                          </td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/*         )} */}
        </div>
      </div>
    </div>
  );
};

export default TrainerDetailCard;
