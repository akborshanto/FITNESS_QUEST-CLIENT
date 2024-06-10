import React from "react";
import Card from "../../../component/cardHome/Card";
import useAxiosSecure from "../../../AxiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UseTitle from "../../../hook/useTitle";

const FetureClass = () => {
  const axiosSecure = useAxiosSecure();

  /* useQuery */
  const { data } = useQuery({
    queryKey: ["fetureclass"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/trainer-booking");
      return data;
    },
  });
console.log(data)
  return (
    <div className="my-8">





<UseTitle heading={'MOST BOOKED CLASSES'}></UseTitle>




















    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.slice(0, 6).map((feture) => {
          return (
            <div className="overflow-hidden rounded bg-white text-slate-500  shadow-slate-200 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            {/*  <!-- Image --> */}
           
            {/*  <!-- Body--> */}
            <div className="p-6">
              <header className="mb-4 flex gap-4">
                <a
                  href="#"
                  className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                >
                  <img
                  src={data?.userInfo?.userPhoto}
                    alt="user name"
                    title="user name"
                    width="48"
                    height="48"
                    className="max-w-full rounded-full"
                  />
                </a>
                <div>
                  <h3 className="text-xl font-medium text-slate-700">
                  Total Booking: {data?.userName}
                  </h3>

<h3>{data?.classs}</h3>

                  <h3 className="text-xl font-medium text-slate-700">
                  Class: {data?.classs}
                  </h3>
                  <h3 className="text-xl font-medium text-slate-700">
                  Pacage: {data?.packages}
                  </h3>
                  <p className="text-sm text-slate-400">
                  
                  </p>
                </div>
              </header>
              <p>
              
              </p>
            </div>
          </div>
   
          );
        })}
      </div>
    </div>
  );
};

export default FetureClass;
