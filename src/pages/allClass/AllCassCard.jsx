import React from "react";
import Card from "../../component/cardHome/Card";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
const AllCassCard = ({ addNewClassAdmin }) => {
  const { classs, imgBB, description ,userInfo} = addNewClassAdmin;
  console.log(addNewClassAdmin)
  return (
    <div className="flex  flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" >
      {/*  <!-- Image --> */}
      <figure className="flex-1 p-4 w-[200px ]">
        <img
          src={imgBB}
          alt="card image"
          className="object-cover min-h-full aspect-auto"
        />
      </figure>
      {/*  <!-- Body--> */}
      <div className="flex-1 p-6 sm:mx-6 sm:px-0">
        <header className="flex gap-4 mb-4">
          <a
            href="#"
            className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
          >
            <img
              src={userInfo?.image}
              alt="user name"
              title="user name"
              width="48"
              height="48"
              className="max-w-full rounded-full"
            />
          </a>
          <div>
            <h3 className="text-xl font-medium text-slate-700">{userInfo?.name}</h3>
          </div>
        </header>
        <p>
          <p className="text-sm text-slate-400"> {description}</p>
        </p>
<h2>ALL TRAINER</h2>
        <div  className="flex gap-4 my-4">


 <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
 <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
 <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
 <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </div>
      </div>
    </div>
  );
};

export default AllCassCard;
