import React from 'react'
import UseButton from '../../../../component/button/Button'
import { Link } from 'react-router-dom'
import { propNames } from '@chakra-ui/react'

const ActivityTaable = ({activity}) => {
    console.log(activity)


    const {name,age,imgBB,day,experience,email,status}=activity
  return (
    <div>
    <td className="px-3 text-2xl font-medium dark:text-gray-600">
      <a
        href="#"
        class="relative inline-flex items-center justify-center w-10 h-10 text-lg text-white rounded-full"
      >
        <img src={imgBB} alt="" />
      </a>
    </td>
    <td className="px-3 py-2">
<p>{name}</p>
    </td>
    <td className="px-3 py-2">
<p className='text-green-400'>  
{status}</p>

    </td>
    <td className="px-3 py-2">
    <p className="dark:text-gray-600">
    
    </p>
    </td>
    <td className="px-3 py-2">

    </td>
    <td className="px-3 py-2">

    </td>
    <td className="px-3 py-2">


    </td>
  </div>
  )
}

export default ActivityTaable
