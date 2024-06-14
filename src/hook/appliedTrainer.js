import React from "react";
import useAuth from "../auth/Auth";
import useAxiosSecure from "../AxiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAppliedTrainer = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["applied-trainer"],
    queryFn: async () => {
      const { data: allTrainer } = await axiosSecure.get("/become-trainer");
     // console.log(allTrainer);
      return allTrainer;
    },
  });

  return [data, refetch, isLoading, isError];
};

export default useAppliedTrainer;
