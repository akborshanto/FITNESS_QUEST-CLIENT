import React from 'react'
import AllTrainerCad from './AllTrainerCad'
import useAllTrainer from '../../hook/useAllTrainer'
import useRole from '../../hook/useRole'
import UseTitle from './../../hook/useTitle';

const AllTrainer = () => {

const[data,isLoading]=useAllTrainer()
//consolelog(data)
// if(isLoading)return <h2>sdfs</h2>
  return (

<div>

<div className="relative lg:py-28 md:py-16 py-10 w-full space-y-4">
<h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
Feedback
  <span className="text-[#007BFF]"> trainers</span>
</h1>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 my-6 lg:justify-items-center'>

{
  data?.map(trainer=><AllTrainerCad      key={Math.random()} trainer={trainer}></AllTrainerCad>)
}

    </div>
</div>


  )
}

export default AllTrainer
