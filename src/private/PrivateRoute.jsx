import React from 'react'
import useAuth from '../auth/Auth'
import { Navigate, useLocation } from 'react-router-dom'
import Spiner from '../component/spinner/Spiner'
import Loading from '../component/spinner/Spiner'

const PrivateRoute = ({children}) => {
const {user,loading}=useAuth()
const location=useLocation()

if(loading)return <Loading></Loading>
if(user){
    return children
}





  return (
   <Navigate to='/login' state={{from:location}} replace></Navigate>
  )
}

export default PrivateRoute
