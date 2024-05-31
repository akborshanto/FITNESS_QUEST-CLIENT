import React from 'react'
import useAuth from '../auth/Auth'
import { Navigate } from 'react-router-dom'
import Spiner from '../component/spinner/Spiner'

const PrivateRoute = ({children}) => {
const {user,loading}=useAuth()


if(loading)return <Spiner></Spiner>
if(user){
    return children
}





  return (
   <Navigate to='/login'></Navigate>
  )
}

export default PrivateRoute
