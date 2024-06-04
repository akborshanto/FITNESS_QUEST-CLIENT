import React from "react";
import Card from './../../../component/cardHome/Card';
import useForum from "../../../hook/userForum";
import ForumPostCard from "./ForumPostCard";

const ForumPost = () => {
const [forum]=useForum()
console.log(forum)
  return <div>FORUM POST 
  


  <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6'>
  {

    forum?.slice(0,6).map(forum=> <ForumPostCard key={Math.random()}  forum={forum}></ForumPostCard>)
    
    }
    
  </div>













  {/*<!-- Component: Blog card with action button --> */}
  
{/*<!-- End Blog card with action button --> */}
  {/*<!-- End Blog card with avatar --> */}

  
  
  
  </div>;
};

export default ForumPost;
