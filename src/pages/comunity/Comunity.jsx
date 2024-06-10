import React, { useEffect, useState } from "react";

import ComunityCard from "./CounityCard";
import useForum from "../../hook/userForum";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { BiUpvote } from "react-icons/bi";
const Comunity = () => {
  const [itemPerPage, setItemPerPage] = useState(6);
  const [pagin, setPagin] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [forum] = useForum();
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
      }/forum?page=${currentPage}&size=${itemPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setPagin(data));
  }, [currentPage, itemPerPage]);

  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {pagin?.map((forum) => (
          <ComunityCard forum={forum} key={Math.random()}></ComunityCard>
        ))}

        {/* pagingantion */}
      </div>

      <div className="  text-center my-6">
        <h1 className="text-2xl">{currentPage}</h1>
        <button className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none" onClick={handlePrev}>
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
        <button className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none" onClick={hadnleNext}>
          NEXT
        </button>
        <select name="" value={itemPerPage} id="" onChange={handleIterPerPage}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="10">30</option>
        </select>
      </div>
    </div>
  );
};

export default Comunity;
