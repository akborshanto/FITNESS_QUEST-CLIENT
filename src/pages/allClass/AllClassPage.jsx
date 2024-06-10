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
  const [pagin, setPagin] = useState([]);
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
      `${
        import.meta.env.VITE_API_URL
      }/addnewClassAdmin?page=${currentPage}&size=${itemPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setPagin(data));
  }, [currentPage, itemPerPage]);

  /* =================================================== */

  const searchFunction = pagin?.filter((item) =>
    item.classs.toLowerCase().includes(serachClass.toLowerCase())
  );
  console.log(searchFunction);

  return (
    <div>
      <div className="mx-auto text-center my-8">
        <div className="relative my-6">
          <input
            id="id-b02"
            type="text"
            name="id-b02"
            placeholder="Search Heree...."
            value={serachClass}
            class=" bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500"
            autocomplete="off"
            onChange={(e) => setSearchClass(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
        {searchFunction?.map((addNewClassAdmin) => (
          <AllCassCard
            key={Math.random()}
            addNewClassAdmin={addNewClassAdmin}
          ></AllCassCard>
        ))}

   
      </div>


{/* pagination */}

<div className="text-center my-6 mx-auto">
    <h1 className="text-2xl ">{currentPage}</h1>
     <div className="my-6">

     <button
       className="inline-flex bg-green-400 h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
       onClick={handlePrev}
     >
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
     <button
       className="inline-flex bg-green-400 h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
       onClick={hadnleNext}
     >
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
