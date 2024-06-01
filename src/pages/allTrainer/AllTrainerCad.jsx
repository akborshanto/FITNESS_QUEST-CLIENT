import React from 'react'
import Card from '../../component/cardHome/Card'
import { Link } from 'react-router-dom';
const AllTrainerCad = () => {
  return (
    <div>

    <Link to='/trainer-detail'>
    <Card></Card>
    
    </Link>

    </div>
  )
}

export default AllTrainerCad
