import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const Spiner = () => {
  return (
    <div className='bg-green-600 '>
    <Box padding='6' boxShadow='lg' bg='red'>
    <SkeletonCircle size='10' />
    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
  </Box>
    </div>
  )
}

export default Spiner
