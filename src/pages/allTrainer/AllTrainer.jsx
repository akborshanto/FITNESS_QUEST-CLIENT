import React from 'react'
import AllTrainerCad from './AllTrainerCad'
import useAllTrainer from '../../hook/useAllTrainer'
import useRole from '../../hook/useRole'
import UseTitle from './../../hook/useTitle';

const AllTrainer = () => {
const [role]=useRole()

const[data,isLoading]=useAllTrainer()


  return (

<div>

<UseTitle heading="ALL TRAINER "></UseTitle>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 justify-items-center'>

{
  data?.map(trainer=><AllTrainerCad trainer={trainer} key={Math.random()}></AllTrainerCad>)
}

    </div>
</div>


  )
}

export default AllTrainer
