import React from 'react'
import axios from 'axios'


export const axiosSecure= axios.create({
  baseURL: "https://fitness-quest-server.vercel.app",
//  baseURL:"https://fitness-quest-server-geizbgrf4-akbor-shantos-projects.vercel.app",
 //timeout:1000,


})
const useAxiosSecure = () => {


  return ( axiosSecure)
}

export default useAxiosSecure
