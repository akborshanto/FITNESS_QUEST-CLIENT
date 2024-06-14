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
  console.log(data);
  return (
    <div className="my-8">
      <UseTitle heading={"MOST BOOKED CLASSES"}></UseTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.slice(0,6).map((feture) => {
          return (
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
              {/*  <!-- Image --> */}

              {/*  <!-- Body--> */}
              <div className="p-6">
                <header className="mb-4 flex gap-4">
                  <a
                    href="#"
                    className="relative inline-flex h-12 w-12 items-center justify-center rounded-full e"
                  >
                    <img
                      src={feture?.userInfo?.userPhoto}
                      alt="user name"
                      title="user name"
                      width="48"
                      height="48"
                      className="max-w-full rounded-full"
                    />
                  </a>
                  <div>
                    <h3 className="text-xl font-medium text-slate-700">
                      Trainer Name{" "}
                      <span className=" text-blue-400">
                        {" "}
                        {feture?.trainerName}
                      </span>
                    </h3>

                    <h3 className="text-xl">
                      Class :
                      <span className="text-2xl font-bold">
                        {feture?.classs}
                      </span>
                    </h3>

                    <h3 className="text-xl">
                      {" "}
                      Pacage:
                      <span className="text-2xl font-bold">
                        {" "}
                        {feture?.packages}
                      </span>
                    </h3>
                    <h3 className="text-xl">
                      {" "}
                      Total Booking:
                      <span className="text-2xl font-bold">
                        {" "}
                        {feture?.totalBooking}
                      </span>
                    </h3>

                    <h3 className="text-xl font-medium text-slate-700"></h3>
                    <p className="text-sm text-slate-400"></p>
                  </div>
                </header>
                <p></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FetureClass;
