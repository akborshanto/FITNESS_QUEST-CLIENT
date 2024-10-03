import React from 'react'
import { useForumNew } from '../../hook/useForumNew'
import Loading from './../../component/Loading/Loading';
import { Helmet } from 'react-helmet-async';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const Comunity = () => {
const {comunity,isLoading,refetch,error}=useForumNew()
console.log(comunity)
const handleBtn=(E)=>{}
  return (
    <div className=" pt-10 md:pt-0 bg-[#141414] min-h-screen pb-10 ">
    <Helmet>
    <title>Fitness - Community</title>
  </Helmet>
  <div className="relative  pt-16 w-full space-y-4">
    <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white">
      Forum
      <span className="text-[#007BFF]"> posts</span>
    </h1>
  </div>
  {isLoading ? (
    <Loading />
  ) : (
    <div className="px-3">
      {comunity?.map((post) => (
        
        <div className="max-w-lg mx-auto mt-8">
        <div key={post._id} className="bg-white shadow-md rounded-md p-4 mb-4 text-black">
          <p className="text-gray-800">{post?.text}</p>
          <div className="mt-2 flex justify-between items-center">
            <div className="flex gap-4">
              <img
                src={post?.image}
                className="h-14 rounded-full"
                alt="Comunity image"
              />
              <div>
         <h1 className='text-black'>{post?.name}</h1> 
            
              </div>
            </div>
            <div className=" flex gap-5    ">
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => handleBtn("Up vote")}
                  className=" p-2 px-4 border rounded-full bg-[#007BFF] font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500"
                >
                  <FaArrowUp />
                </button>
                <p className="text-sm font-bold">{/* {post.upVote} */} vote</p>
              </div>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => handleBtn("Dowon vote")}
                  className="p-2 px-4 border rounded-full bg-[#ff0000] font-bold border-[#ff0000] bt text-white hover:bg-transparent hover:text-[#ff0000] duration-500"
                >
                  <FaArrowDown />
                </button>
                <p className="text-sm font-bold">{/* {post.downVote} */} down vote</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}

    </div>
  )}
</div>
  )
}

export default Comunity