import React, { useState } from 'react'
import Card from '../../component/cardHome/Card'
import { Link } from 'react-router-dom'
import UseButton from '../../component/button/Button'
import { GrUserAdmin, GrYoga } from "react-icons/gr";
import { BiUpvote } from 'react-icons/bi';
import { BiSolidDownvote } from "react-icons/bi";
const ComunityCard = ({forum}) => {
// console.log(forum)
const [voting,setVoting]=useState(0)
  return (
    <div>
    <div>
    <div className="overflow-hidden rounded w-[350px] h-[400px] p-6 bg-white text-slate-500 shadow-md shadow-slate-200">
    {/*  <!-- Image --> */}
    
    {/*  <!-- Body--> */}
    <div className="p-7">
      <header className="mb-4 flex gap-4">
        <a
          href="#"
          className="relative inline-flex h-12 w-12 items p-4-center justify-center rounded-full text-white"
        >
          <img
src={forum?.userInfo.photo}
            alt="user name"
            title="user name"
            width="48"
            height="48"
            className="max-w-full rounded-full"
          />
        </a>
        <div>
          <h3 className="text-xl font-medium text-slate-700">
            {forum?.userInfo.name}
          </h3>
          <p className="text-sm text-slate-400"> By Mary Jay, jun 3 2023</p>
        </div>
      </header>
      <h3 className='text-2xl font-bold text-blue-200 my-4'>{forum?.classs}</h3>
      <p title={forum.article}>
       {forum.article.slice(0,150)}....
      </p>
    </div>
    {/*  <!-- Action base sized link button --> */}
    <div className="flex justify-end gap-5 p-2 pt-0">
<h1 className='text-2xl'><BiUpvote onClick={()=>setVoting(voting +1)}/></h1>
<h1 className='text-2xl'><BiSolidDownvote onClick={()=>setVoting(voting -1)}/></h1>
<h1>{voting}</h1>
<h1 className="text-2xl text-green-800">

  {forum.userInfo.role ==="Admin" ? <GrUserAdmin />:<GrYoga className='text-blue-400' />}

 
</h1>


    </div>
  </div>
    </div>
    </div>
  )
}

export default ComunityCard
