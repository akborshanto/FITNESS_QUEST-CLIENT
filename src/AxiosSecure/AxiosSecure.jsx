import React from 'react'
import axios from 'axios'


export const axiosSecure= axios.create({
 baseURL:"https://trainer-quest.vercel.app",
 //timeout:1000,


})
const useAxiosSecure = () => {


  return ( axiosSecure)
}

export default useAxiosSecure
