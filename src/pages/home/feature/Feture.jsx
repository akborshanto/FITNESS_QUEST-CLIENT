import React, { useEffect, useState } from 'react'
import UseTitle from '../../../hook/useTitle'

const Feture = () => {
const [feture,setFeture]=useState([])
useEffect(() => {
fetch('/feture.json')

.then(res=>res.json())
.then(data=> setFeture(data))
}, [])


  return (
    <div>

    <UseTitle
    heading="FETURE"
    description={
      "A gym typically offers access to fitness equipment and facilities as its primary service"
    }
  ></UseTitle>


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {
      feture.map(item=>    <div key={Math.random()} className="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        {/*  <!-- Icon --> */}
        <figure className="p-6 pb-0">
        <title id="title-01">{item.name}</title>
      <img src={item.img} className='w-[150px] h-[150px]   mx-auto  rounded-full' alt="" />  
      
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <h3 className="mb-4 text-xl font-medium text-slate-700">{item.name}</h3>
          <p>
           {item.description}
          </p>
        </div>
      </div>
    
    )
    }
    </div>




    </div>
  )
}

export default Feture
