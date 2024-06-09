import React from 'react'
import useForum from '../../../hook/userForum'
import ComunityCard from './ComunityCard'

const ComunitySection = () => {
const [forum]=useForum()


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      
{


    forum?.slice(0,6).map(comunity=><ComunityCard comunity={comunity}></ComunityCard>)
}

    </div>
  )
}

export default ComunitySection
