import React from 'react'
import useForum from '../../../hook/userForum'
import ComunityCard from './ComunityCard'
import UseTitle from '../../../hook/useTitle'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
const ComunitySection = () => {
const [forum]=useForum()
//consolelog(forum)

  return (
   <div className='my-8'>

   <div
    className="  bg-cover bg-center bg-fixed"
    style={{
      backgroundImage:
        "url(https://technext.github.io/crossfits/images/hero_bg_2.jpg)",
    }}
  >
    <div className="relative py-10 w-full space-y-4 max-w-7xl m-auto px-5 md:px-10">
      <h1 className="lg:block hidden  uppercase text-7xl mt-0  absolute -left-0 outline-text-gym bottom-0 opacity-30">
        Features
      </h1>
      <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
        Explore Our <br /> Recent{" "}
        <span className="text-[#007BFF]">Forum post</span>
      </h1>
      <p className="text-center text-white  text-sm md:text-base md:px-20">
      This component elegantly presents forum posts, intelligently truncating lengthy content while preserving readability. By condensing extensive posts to a digestible length and appending an ellipsis for extended text, it maintains a visually appealing interface. 
      </p>
    </div>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-16'>
      
   {
   
   
       forum?.slice(25,31).map(comunity=><ComunityCard comunity={comunity} key={Math.random()}></ComunityCard>)
   }
   
       </div>
   </div>
   </div>
  )
}

export default ComunitySection
