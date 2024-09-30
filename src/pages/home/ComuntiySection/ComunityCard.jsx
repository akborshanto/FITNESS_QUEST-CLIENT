import React from 'react'
import { Link } from 'react-router-dom'
import UseButton from './../../../component/button/Button';
import { FaArrowUp } from 'react-icons/fa';

const ComunityCard = ({comunity}) => {
    const { article,
        classs,
        userInfo,_id,imgBB}=comunity || {}

  return (
    <div>
 

        <Link to={"/community"}  >  <div
       
        className="max-w-lg mx-auto mt-8 border-white border rounded-lg border-opacity-15 bg-black bg-opacity-10 backdrop-blur-md duration-500 text-white"
      >
        <div className="  text-whiterounded-md p-4 mb-4">
          <p className="">
          {article?.slice(0,200)}......
          </p>
          <div className="mt-2 flex justify-between items-center">
            <div className="flex gap-4">
              <img
              src={imgBB}
                className="h-14 rounded-full"
                alt=""
              />
              <div>
              {classs}
              {/*   <p>{post.role}</p> */}
              </div>
            </div>
            <div className=" flex gap-5    ">
              <button
                onClick={() => handleBtn("Up vote")}
                className=" p-2 px-4 border rounded-full bg-[#007BFF] font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500"
              >
                <FaArrowUp />
              </button>
              <Link to={`/comunityDetail/${_id}`}>
  <UseButton btnHeading="Explore Now"></UseButton>
 
     </Link>
            </div>
          </div>
        </div>
      </div></Link>


  







    </div>
  )
}

export default ComunityCard
