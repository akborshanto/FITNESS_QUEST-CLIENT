import React from 'react'
import Card from '../../component/cardHome/Card'
import { Link } from 'react-router-dom'
import UseButton from '../../component/button/Button'
import { GrUserAdmin, GrYoga } from "react-icons/gr";
const ComunityCard = ({forum}) => {
console.log(forum)

  return (
    <div>
    <div>
    <div className="overflow-hidden rounded w-[300px] bg-white text-slate-500 shadow-md shadow-slate-200">
    {/*  <!-- Image --> */}
    
    {/*  <!-- Body--> */}
    <div className="p-6">
      <header className="mb-4 flex gap-4">
        <a
          href="#"
          className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
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
      <h3 className='text-2xl font-bold text-red-200'>{forum?.classs}</h3>
      <p>
       {forum.article.slice(200)}....
      </p>
    </div>
    {/*  <!-- Action base sized link button --> */}
    <div className="flex justify-end gap-2 p-2 pt-0">

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
