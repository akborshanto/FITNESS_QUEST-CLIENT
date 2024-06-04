import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../AxiosSecure/AxiosSecure"
import useAuth from "../auth/Auth"

 const useForum=()=>{
const {user}=useAuth()
const axiosSecure=useAxiosSecure()

const {data: forum ,refetch,isLoading}=useQuery({
    queryKey:['userForum'],
    queryFn: async ()=>{
        const {data}= await axiosSecure.get('/forum')
        return data
    }
})


return [forum]




    


}
export default useForum