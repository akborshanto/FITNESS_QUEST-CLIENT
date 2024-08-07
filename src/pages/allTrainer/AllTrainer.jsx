import React from 'react'
import AllTrainerCad from './AllTrainerCad'
import useAllTrainer from '../../hook/useAllTrainer'
import useRole from '../../hook/useRole'
import UseTitle from './../../hook/useTitle';

const AllTrainer = () => {

const[data,isLoading]=useAllTrainer()
console.log(data)
// if(isLoading)return <h2>sdfs</h2>
  return (

<div>

<UseTitle heading="ALL TRAINER "></UseTitle>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 my-6 lg:justify-items-center'>

{
  data?.map(trainer=><AllTrainerCad trainer={trainer}></AllTrainerCad>)
}

    </div>
</div>


  )
}

export default AllTrainer
