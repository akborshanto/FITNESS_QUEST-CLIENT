import React from "react";
import useAllTrainer from "../../../hook/useAllTrainer";
import UseTitle from "../../../hook/useTitle";
import { GrYoga } from "react-icons/gr";

const TeamSection = () => {
  const [data] = useAllTrainer();



  return (
    <div className="my-6 ">
      <UseTitle
        heading="OUR  TEAM"
        description={
          " team trainer is a professional who teaches and develops the skills of employees to increase operational efficiency and maximize productivity"
        }
      ></UseTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  justify-items-center my-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  my-5 p-5">
        {data?.slice(0, 3).map((trainer) => (
          <div className="overflow-hidden rounded bg-white  text-slate-500 shadow-md shadow-slate-200 w-[350px] h-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          {/*  <!-- Image --> */}
          <figure>
            <img
              src={trainer.imgBB}
              alt="card image"
              className="aspect-video w-full"
            />
          </figure>
          {/*  <!-- Body--> */}
          <div className="p-6">
            <header className="mb-4">
              <h3 className="text-xl font-medium text-slate-700">
                Trainer Name: <span className=' text-xl lg:text-2xl text-blue-400 font-sans'>{trainer.name}</span>
              </h3>
             
              <div className='flex items-center gap-5 my-5 '>
               <p className=" text-slate-400">SOCIAL ICON </p>
               <GrYoga className='text-blue-400 text-2xl  bg-white ' />
               </div>
            </header>
            <p>
            
            Experience : {trainer.experience}
            </p>
            <p>
            
            Available Slot : {trainer.time}
            </p>
          </div>
        
        </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
