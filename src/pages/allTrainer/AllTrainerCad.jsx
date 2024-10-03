import React from "react";
// import Card from "../../component/cardHome/Card";
import { Link } from "react-router-dom";
// import UseButton from "../../component/button/Button";
import { CiFacebook } from "react-icons/ci";
import { GrYoga } from "react-icons/gr";
const AllTrainerCad = ({ trainer }) => {
  //consolelog(trainer)
  const {
    _id,
    name,
    email,
    age,
    day,
    time,
    imgBB,
    skills,
    status,
    role,
    experience,
  } = trainer || {};
  /*  */

  return (
    <div>
      <div className=" pt-10 md:pt-0  max-w-7xl md:px-10 px-2 pb-10 mx-auto ">
        {/*  <Helmet>
      <title>Workout - Trainers</title>
    </Helmet> */}
        <div className="container m-auto">
          <Link
            to={`/trainer-detail/${_id}`}
            className=" cursor-pointer"
            key={trainer._id}
          >
            <div className="h-52  shadow-black border border-gray-400/15 shadow-sm p-2 group rounded-[15px] overflow-hidden">
              <div className="h-full flex gap-3">
                <Link
                  to={`/trainer-detail/${_id}`}
                  className="overflow-hidden h-full w-[200px] rounded-[10px]"
                >
                  <img
                    src={imgBB}
                    alt={name}
                    className="h-full w-full group-hover:scale-110 duration-500 object-cover object-top cursor-pointer"
                  />
                </Link>
                <div className="text-white flex-1 md:space-y-2 space-y-1">
                  <div className="flex justify-between w-full relative">
                    <h2 className="text-2xl">{name}</h2>
                    <div className="absolute right-0 ">
                      <p className="bg-yellow-500/5 border border-gray-700/15 text-xs font-bold   px-2 py-1 rounded-full">
                        Ex- {experience}+ Year
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="capitalize font-bold text-sm text-gray-300">
                      expertise :
                    </p>
                    <div className="flex flex-wrap gap-1">
                      SPEciality
                      {/*                         {trainer.specialties
                          .slice(0, 3)
                          .map((specialty, index) => (
                            <p
                              key={index}
                              className="md:text-sm text-[8px] font-bold bg-white text-gray-600 px-2 mt-1 rounded-full border border-gray-500/15 "
                            >
                              {specialty}
                            </p>
                          ))} */}
                    </div>
                  </div>
                  {/*   {trainer.slots.length !== 0 ? ( */}
                  <div>
                    <p className="capitalize font-bold text-sm text-gray-300">
                      Available slots :-
                    </p>
                    <div className="flex flex-col flex-wrap gap-[2px]">
                      {/*            {trainer.slots.slice(0, 3).map((slot, index) => (
                            <Link
                              to={`/trainerbooking?id=${trainer._id}&slot=${slot.name}`}
                              key={index}
                              className="md:text-xs text-[10px]   cursor-pointer  border bg-[#007BFF]/30 font-bold   hover:bg-transparent hover:text-[#007BFF] duration-500 text-white py-[2px] px-2 mt-1 rounded-full  border-gray-500/15 "
                            >
                              {slot.name} - {slot.time}
                            </Link>
                          ))} */}
                    </div>
                  </div>
                  )
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllTrainerCad;
