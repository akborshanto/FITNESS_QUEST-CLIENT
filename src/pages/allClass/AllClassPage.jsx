import React, { useEffect, useState } from "react";
import AllCassCard from "./AllCassCard";
import useAllTrainer from "../../hook/useAllTrainer";
import useAxiosSecure from "../../AxiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

const AllClassPage = () => {
  const axiosSecure = useAxiosSecure();
  const [serachClass, setSearchClass] = useState("");

  /* useQuery */
  //   const {data}=useQuery({
  //     queryKey:['fetureclass'],
  //     queryFn:async ()=>{
  //   const {data}=await axiosSecure.get('/addnewClassAdmin')
  //   console.log(data)
  //   return data

  //     }
  //   })
  //  // console.log(data)

  /* classs filter */
  /* ================================================= */
  const [itemPerPage, setItemPerPage] = useState(6);
  const [pagin,setPagin]=useState([])
  const [currentPage, setCurrentPage] = useState(0);

  const { count } = useLoaderData();


  const numbeOfPage = Math.ceil(count / itemPerPage);
  //const pages=[]
  const pages = [...Array(numbeOfPage).keys()];
  const handleIterPerPage = (e) => {
    //4
    //  console.log(e.target.value)
    const val = parseInt(e.target.value);
 
    setItemPerPage(val);
    setCurrentPage(0);
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  /* hadnleNext */
  const hadnleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };


  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/addnewClassAdmin?page=${currentPage}&size=${itemPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setPagin(data));
  }, [currentPage, itemPerPage]);




  /* =================================================== */

  const searchFunction=pagin?.filter(item=> item.classs.toLowerCase().includes(serachClass.toLowerCase()))
  console.log(searchFunction)

  return (
    <div>
      <div className="relative my-6">
        <input
          id="id-b02"
          type="text"
          name="id-b02"
          placeholder="your name"
          value={serachClass}
          className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          onChange={(e) => setSearchClass(e.target.value)}
        />
        <label
          htmlFor="id-b02"
          className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Your name
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {searchFunction?.map((addNewClassAdmin) => (
          <AllCassCard
            key={Math.random()}
            addNewClassAdmin={addNewClassAdmin}
          ></AllCassCard>
        ))}

        <div className="flex ">
          <h1>{currentPage}</h1>
          <button className="btn btn-danger" onClick={handlePrev}>
            PREV
          </button>
          {pages.map((page) => (
            <button
              className={`${
                currentPage === page && "selected btn btn-primary mx-6 "
              } btn  btn-primary mx-4`}
              key={Math.random()}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button className="btn btn-danger" onClick={hadnleNext}>
            NEXT
          </button>
          <select
            name=""
            value={itemPerPage}
            id=""
            onChange={handleIterPerPage}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="10">30</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllClassPage;
