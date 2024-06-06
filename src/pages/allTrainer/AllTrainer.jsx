import React from 'react'
import AllTrainerCad from './AllTrainerCad'
import useAllTrainer from '../../hook/useAllTrainer'
import useRole from '../../hook/useRole'

const AllTrainer = () => {
const [role]=useRole()
console.log(role)
const[data,isLoading]=useAllTrainer()

console.log(data)


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      ALL TRAINER

{
  data?.map(trainer=><AllTrainerCad trainer={trainer} key={Math.random()}></AllTrainerCad>)
}

    </div>
  )
}

export default AllTrainer
