import React, { useEffect, useState } from "react";
import AllCassCard from "./AllCassCard";

import useAxiosSecure from "../../AxiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

const AllClassPage = () => {
  const axiosSecure = useAxiosSecure();
  const [serachClass, setSearchClass] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading,setIsLoading]=useState(false)
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
    //  //consolelog(e.target.value)
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
    setIsLoading(true)
    fetch(
      `${
        import.meta.env.VITE_API_URL
      }/addnewClassAdmin?page=${currentPage}&size=${itemPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {setPagin(data)
setIsLoading(false)

      });
  }, [currentPage, itemPerPage]);

  /* =================================================== */

  const searchFunction = pagin?.filter((item) =>
    item.classs.toLowerCase().includes(serachClass.toLowerCase())
  );
  //consolelog(searchFunction);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  window.scrollTo(0, 0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.search.value);
  };
  return (
    <div>

    <div className="min-h-screen  bg-[#141414]">
{/*     <Helmet>
      <title>Workout - Classes</title>
    </Helmet> */}
    <div className="relative pt-28 pb-10 w-full space-y-4">
      <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-white uppercase">
        Our
        <span className="text-[#007BFF]"> Classes</span>
      </h1>
    </div>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-5">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          name="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-[#007BFF] hover:bg-[#007BFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>

    {isLoading ? (
      <div className="min-h-screen w-full flex items-center justify-center">
        {" "}
        <ReactLoading
          type={"spin"}
          color={"#007BFF"}
          height={50}
          width={50}
        />
      </div>
    ) : (
      <div className="max-w-7xl md:px-10 px-3  m-auto mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 md:p-0 p-3">
          {searchFunction.map((classItem) => (
            <div key={classItem._id}>
              <div
                className="h-52 bg-cover bg-center rounded-lg hover:-translate-y-[5px]   duration-500"
                style={{ backgroundImage: `url(${classItem.image})` }}
              >
                <div className="flex flex-col relative group justify-end h-full text-white bg-gray-800/15 p-4">
                  <h1 className="text-3xl  group-hover:text-4xl duration-500">
                    {classItem.name}
                  </h1>
                  <div className="absolute top-0 bg-black bg-opacity-30 backdrop-blur-sm px-3 py-1 rounded-b-xl">
                    <div>
                      <img
                        src="https://i.ibb.co.com/ypVCycY/favorite.png"
                        alt=""
                        className="h-7 w-7"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-bold">
                        {classItem.bookings}
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute text-xs right-2 top-2 bg-black text-white
               rounded-md px-3 py-2 text-center"
                  >
                    {
                      <div className="w-full h-full">
                        {classItem.trainers.length > 0 ? (
                          <div className="dropdown dropdown-end">
                            <div
                              tabIndex={0}
                              role="button"
                              className="w-full h-full"
                            >
                              Choose a trainer
                            </div>
                            <ul
                              tabIndex={0}
                              className="dropdown-content menu bg-black bg-opacity-30 backdrop-blur-sm w-32 rounded-box z-[1]  p-2 shadow"
                            >
                              {classItem.trainers
                                .slice(0, 3)
                                .map((trainer) => (
                                  <li
                                    key={trainer._id}
                                    className="h-full w-full space-y-1 hover:bg-white/5 rounded-lg duration-500"
                                  >
                                    <Link
                                      to={`/trainers/${trainer._id}`}
                                      className="cursor-pointer flex items-center gap-2 h-full w-full  "
                                    >
                                      <img
                                        src={trainer.image}
                                        alt={trainer.name}
                                        className="h-7 w-7 rounded-full border-2 object-cover object-top"
                                      />
                                      <p className="text-xs">
                                        {trainer.name}
                                      </p>
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        ) : (
                          "No trainer available"
                        )}
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

   {/*      {classes.length === 9 && (
          <div className="w-full flex justify-center py-10">
            <Stack spacing={2}>
              <Pagination
                color="primary"
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "white", // Change the text color to white
                  },
                }}
              />
            </Stack>
          </div>
        )} */}
      </div>
    )}
  </div>




    
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
