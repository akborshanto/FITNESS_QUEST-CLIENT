import React from 'react'
import useForum from '../../../hook/userForum'
import ComunityCard from './ComunityCard'
import UseTitle from '../../../hook/useTitle'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
const ComunitySection = () => {
const [forum]=useForum()


  return (
   <div className='my-8'>

<UseTitle heading={'COMUNITY FORUM'} description={'At its core, community fitness involves coming together with shared health and fitness goals.'}></UseTitle>

   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-16'>
      
   {
   
   
       forum?.slice(14,20).map(comunity=><ComunityCard comunity={comunity}></ComunityCard>)
   }
   
       </div>
   </div>
  )
}

export default ComunitySection
