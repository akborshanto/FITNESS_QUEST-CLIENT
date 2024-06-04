import React, { useState } from "react";
import useAuth from "../auth/Auth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosSecure/AxiosSecure";

const useRole = () => {


  const { user, loading } = useAuth();

  const axiosSecure = useAxiosSecure();
  const {data:role,isLoading,refetch} = useQuery({
    queryKey: ["role"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/userCn/${user?.email}`);
      console.log(data)
      return data.role
    },
  });

  return [role,isLoading,refetch];
};

export default useRole;
