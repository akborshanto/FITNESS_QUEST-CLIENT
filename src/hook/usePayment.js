import React from "react";
import useAuth from "../auth/Auth";
import useAxiosSecure from "../AxiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";

const usePayment = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data:payment, isError, isLoading, refetch } = useQuery({
    queryKey: ["all-trainer"],
    queryFn: async () => {
      const { data: allTrainer } = await axiosSecure.get("/payment-card");
     // console.log(allTrainer);
      return allTrainer;
    },
  });

  return [payment, refetch, isLoading, isError];
};

export default usePayment;
