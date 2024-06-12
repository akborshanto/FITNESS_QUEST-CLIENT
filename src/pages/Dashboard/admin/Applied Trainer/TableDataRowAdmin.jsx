import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseButton from "../../../../component/button/Button";

const AllTrainerAdminCard = ({ trainer,TrainerSingleData }) => {
  const  {
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
    experience
  }=trainer
  return (
    <div>





    <div className="overflow-hidden rounded bg-white  text-slate-500 shadow-slate-200 w-[350px] h-auto shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
    {/*  <!-- Image --> */}
    <figure>
      <img
        src={imgBB}
        alt="card image"
        className="aspect-video w-full"
      />
    </figure>
    {/*  <!-- Body--> */}
    <div className="p-6">
      <header className="mb-4">
        <h3 className="text-xl font-medium text-slate-700">
          Trainer Name:{name}
        </h3>
       
        <div className='flex items-center gap-5 my-5 '>
         <p className=" text-slate-400">SOCIAL ICON </p>
       
         </div>
      </header>
      <p>
      Experience : {experience}
      </p>
    </div>
    {/*  <!-- Action base sized basic button --> */}
    <div className="flex justify-end p-6 pt-0">
    
{/*     <Link to={`/dashboard/singelApplied/${trainer?._id}`}>
      
     <UseButton btnHeading="Trainer Detail"></UseButton>

     </Link>
        
    <Link to={ `/trainer-detail/${_id}`}>
   
      </Link> */}
    </div>
  </div>















    </div>
  );
};

export default AllTrainerAdminCard;
