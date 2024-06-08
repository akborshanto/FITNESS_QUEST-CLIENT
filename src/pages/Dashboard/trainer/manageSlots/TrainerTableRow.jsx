import React from 'react'
import UseButton from './../../../../component/button/Button';
import { Link } from 'react-router-dom';

const TrainerTableRow = ({allBookingSlot,deleteSlot}) => {
    const {
        trainerName,
        slot,
        classs,
        packages,
        price,
  userInfo,
        _id
    
      }=allBookingSlot
  
  return (
    <div>
    <div>
    <td className="px-3 text-2xl font-medium dark:text-gray-600">
      <a
        href="#"
        class="relative inline-flex items-center justify-center w-10 h-10 text-lg text-white rounded-full"
      >
        <img src={userInfo?.userPhoto} alt="" />
      </a>
    </td>
    <td className="px-3 py-2">
  {userInfo?.userName}
    </td>
    <td className="px-3 py-2">
  


    </td>
    <td className="px-3 py-2">
    <p className="dark:text-gray-600">{slot}</p>
    </td>
    <td className="px-3 py-2">
  {packages}
    </td>
    <td className="px-3 py-2">
   {price}
    </td>
    <td className="px-3 py-2">


    <Link onClick={()=>deleteSlot(_id)}>
        
  <UseButton btnHeading="DELETE" ></UseButton>
    </Link>

    </td>
  </div>
    </div>
  )
}

export default TrainerTableRow
