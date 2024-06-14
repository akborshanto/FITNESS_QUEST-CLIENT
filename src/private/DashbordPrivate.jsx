import React from 'react'
import useAuth from '../auth/Auth'
import { Navigate, useLocation } from 'react-router-dom'

const DashbordPrivate = ({children}) => {
const {user}=useAuth()

const location=useLocation()
if(user){
    return children
}



return (
    <Navigate to='/dashboard' state={{from:location}} replace></Navigate>
   )
}

export default DashbordPrivate
