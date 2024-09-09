import React from 'react'
import Card from '../../component/cardHome/Card'
import { Link } from 'react-router-dom';
import UseButton from '../../component/button/Button';
import { CiFacebook } from "react-icons/ci";
import { GrYoga } from 'react-icons/gr';
const AllTrainerCad = ({trainer}) => {
  //consolelog(trainer)
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
  }=trainer || {}
  /*  */

  return (
    <div>


    <div>
    <>
    {/*<!-- Component: E-commerce card --> */}
    <div className="overflow-hidden rounded bg-white  text-slate-500 shadow-md shadow-slate-200 w-[350px] h-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
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
            Trainer Name: <span className=' text-xl lg:text-2xl text-blue-400 font-sans'>{name}</span>
          </h3>
         
          <div className='flex items-center gap-5 my-5 '>
           <p className=" text-slate-400">SOCIAL ICON </p>
           <GrYoga className='text-blue-400 text-2xl  bg-white ' />
           </div>
        </header>
        <p>
        
        Experience : {experience}
        </p>
        <p>
        
        Available Slot : {time}
        </p>
      </div>
      {/*  <!-- Action base sized basic button --> */}
      <div className="flex justify-end p-6 pt-0">
      <Link to={ `/trainer-detail/${_id}`}>
        <UseButton btnHeading='Know More' ></UseButton>

        </Link>
      </div>
    </div>
    {/*<!-- End E-commerce card --> */}
    </>
    </div>
    
  

    </div>
  )
}

export default AllTrainerCad
