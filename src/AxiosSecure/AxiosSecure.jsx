import React from 'react'
import axios from 'axios'


export const axiosSecure= axios.create({
 baseURL:import.meta.env.VITE_API_URL,
 timeout:1000,


})
const useAxiosSecure = () => {


  return ( axiosSecure)
}

export default useAxiosSecure
