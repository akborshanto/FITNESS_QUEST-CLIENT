import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../AxiosSecure/AxiosSecure"
import useAuth from "../auth/Auth"

 const useClassAdmin=()=>{
const {user}=useAuth()
const axiosSecure=useAxiosSecure()

const {data: allClassAdmin ,refetch,isLoading}=useQuery({
    queryKey:['newClsssAdmin'],
    queryFn: async ()=>{
        const {data}= await axiosSecure.get('/addnewClassAdmin')
      //  console.log(data)
        return data
    }
})


return [allClassAdmin]




    


}
export default useClassAdmin