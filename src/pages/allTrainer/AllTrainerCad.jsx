import React from 'react'
import Card from '../../component/cardHome/Card'
import { Link } from 'react-router-dom';
import UseButton from '../../component/button/Button';
const AllTrainerCad = ({trainer}) => {
  console.log(trainer)
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
    role
  }=trainer
  /*  */

  return (
    <div>


    <div>
    <>
    {/*<!-- Component: E-commerce card --> */}
    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 w-[300px] h-auto">
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
          <p className=" text-slate-400"> Social icons</p>
        </header>
        <p>
        Age : {age}
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
