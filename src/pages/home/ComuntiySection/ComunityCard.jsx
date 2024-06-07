import React from 'react'
import { Link } from 'react-router-dom'

const ComunityCard = ({comunity}) => {
    const { article,
        classs,
        userInfo,_id}=comunity
  return (
    <div>
    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 w-[300px] h-auto">
    {/*  <!-- Image --> */}
    <figure>
      <img
        src={userInfo?.photo}
        alt="card image"
        className="aspect-video w-full"
      />
    </figure>
    {/*  <!-- Body--> */}
    <div className="p-6">
      <header className="mb-4">
        <h3 className="text-xl font-medium text-slate-700">
       {classs}
        </h3>
  
      </header>
      <p>
       {article.slice(0,20)}
      </p>
    </div>
    {/*  <!-- Action base sized basic button --> */}
    <div className="flex justify-end p-6 pt-0">
     <Link to={`/comunityDetail/${_id}`}>
     <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
     <span>Explore Now</span>
   </button>
     </Link>
    </div>
  </div>
    </div>
  )
}

export default ComunityCard
