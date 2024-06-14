import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../AxiosSecure/AxiosSecure";
import { useParams } from "react-router-dom";

const ComunityDetail = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["singleComunity"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/forums/${id}`);

      return data;
    },
  });

  return (
    <div >
      <div class="  mx-auto "></div>
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 w-[400px] h-auto mx-auto my-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
        {/*  <!-- Image --> */}
        <figure></figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4 flex gap-4">
            <a
              href="#"
              className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
            >
              <img
                src={data?.userInfo?.photo}
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
            </a>
            <div>
              <h3 className="text-xl font-medium text-slate-700">
                {data?.userInfo?.name}
              </h3>
       
            </div>
          </header>
          <h1 className="text-2xl text-blue-500  uppercase font-serif font-bold my-5">{data?.classs}</h1>

          <img
          src={data?.imgBB}
          alt="card image"
          className="aspect-video w-full my-5  rounded-lg  "
        /> 

          <p className="font-bold selection:text-blue-50 leading-8">{data?.article}</p>
z
        </div>
      </div>
    </div>
  );
};

export default ComunityDetail;
