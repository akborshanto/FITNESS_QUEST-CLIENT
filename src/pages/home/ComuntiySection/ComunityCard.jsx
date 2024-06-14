import React from 'react'
import { Link } from 'react-router-dom'
import UseButton from './../../../component/button/Button';

const ComunityCard = ({comunity}) => {
    const { article,
        classs,
        userInfo,_id,imgBB}=comunity

  return (
    <div>
    <div className="overflow-hidden rounded bg-white text-slate-500 p-2 shadow-slate-200 w-[300px] h-auto shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]" >
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
        <h3 className=" font-medium text-slate-700 text-2xl font-sans">
       {classs}
        </h3>
  
      </header>
      <p className=' font-serif' title={article}>
       {article.slice(0,200)}......
      </p>
    </div>
    {/*  <!-- Action base sized basic button --> */}
    <div className="flex justify-end p-6 pt-0">
     <Link to={`/comunityDetail/${_id}`}>
  <UseButton btnHeading="Explore Now"></UseButton>
 
     </Link>
    </div>
  </div>
    </div>
  )
}

export default ComunityCard
