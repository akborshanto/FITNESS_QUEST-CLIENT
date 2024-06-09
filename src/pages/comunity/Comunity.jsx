import React, { useEffect, useState } from "react";

import ComunityCard from "./CounityCard";
import useForum from "../../hook/userForum";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Comunity = () => {
  const [itemPerPage, setItemPerPage] = useState(6);
  const [pagin,setPagin]=useState([])
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
    console.log(val);
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
      `http://localhost:5000/forum?page=${currentPage}&size=${itemPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setPagin(data));
  }, [currentPage, itemPerPage]);






  console.log(currentPage)
  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {pagin?.map((forum) => (
          <ComunityCard forum={forum} key={Math.random()}></ComunityCard>
        ))}

        {/* pagingantion */}
      </div>



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
