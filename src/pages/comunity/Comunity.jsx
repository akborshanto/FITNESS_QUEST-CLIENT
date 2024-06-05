import React from 'react'

import ComunityCard from './CounityCard';
import useForum from '../../hook/userForum';

const Comunity = () => {

const [forum]=useForum()


  return (

    <div className='mt-6'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>



    {
      forum?.map(forum=> <ComunityCard  forum={forum} key={Math.random()}></ComunityCard>)
    }
    
    
    
        </div>
    </div>

  )
}

export default Comunity
