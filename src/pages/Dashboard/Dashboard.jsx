import React, { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useRole from "../../hook/useRole";
import Loading from "../../component/Loading/Loading";

const Dashboard = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const [role, isLoading] = useRole();
  //consolelog(role);
  if (isLoading) {
    return <Loading></Loading>;
  }

  const links = (
    <Fragment>
      {/* 🚩🏴  ADMIN*🚩🏴‍☠️🚩*/}
      <li className="px-3">
        <a className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 ">
          <div className="flex items-center self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              aria-label="Dashboard icon"
              role="graphics-symbol"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
            <Link to="/">HOME</Link>
          </div>
        </a>
      </li>

      {role === "admin" && (
        <li className="px-3">
          <a className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 ">
            <div className="flex items-center self-center">
             
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
              <Link to="/dashboard/news-letter">News Letter</Link>
            </div>
          </a>
        </li>
      )}
      {role === "admin" && (
        <li className="px-3">
          <a className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 ">
            <div className="flex items-center self-center">
             
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
              <Link to="/dashboard/all-trainer">All Trainer</Link>
            </div>
          </a>
        </li>
      )}
      {role === "admin" && (
        <li className="px-3">
          <a className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 ">
            <div className="flex items-center self-center">
             
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
              <Link to="/dashboard/applied-trainer">AppliedTrainer</Link>
            </div>
          </a>
        </li>
      )}
      {role === "admin" && (
        <li className="px-3">
          <a className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 ">
            <div className="flex items-center self-center">
             
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
              <Link to="/dashboard/balance">Balance</Link>
            </div>
          </a>
        </li>
      )}

      {role === "admin" && (
        <li className="px-3">
          <a className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 ">
            <div className="flex items-center self-center">
             
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
              <Link to="/dashboard/add-newClass">Add new Class</Link>
            </div>
          </a>
        </li>
        
      )}


      {role === "admin"  && (
        <li className="px-3">
          <a className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 ">
            <div className="flex items-center self-center">
       
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
              <Link to="/dashboard/addNew-forum">Add New Forum</Link>
            </div>
          </a>
        </li>
      )}








      {/* 🚩🏴====================================================  TRAINERERER*🚩🏴‍☠️🚩==================================*/}

      {role === "trainer" && (
        <li className="px-3">
          <a className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 ">
            <div className="flex items-center self-center">
             
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
              <Link to="/dashboard/manage-slot">Mangae Slot</Link>
            </div>
          </a>
        </li>
      )}
      {role === "trainer" && (
        <li className="px-3">
          <a className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 ">
            <div className="flex items-center self-center">
             
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
              <Link to="/dashboard/add-new-slot">Add New Slot</Link>
            </div>
          </a>
        </li>
      )}
  
      {role === "trainer"  && (
        <li className="px-3">
          <a className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 ">
            <div className="flex items-center self-center">
       
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
              <Link to="/dashboard/addNew-forum">Add New Forum</Link>
            </div>
          </a>
        </li>
      )}

      {/* 🚩🏴====================================================  MEMBER*🚩🏴‍☠️🚩==================================*/}

      {role === "member" && (
        <li className="px-3">
          <a className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 ">
            <div className="flex items-center self-center">
             
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
              <Link to="/dashboard/activity-log">Activity-log</Link>
            </div>
          </a>
        </li>
      )}
      {role === "member" && (
        <li className="px-3">
          <a className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 ">
            <div className="flex items-center self-center">
             
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
              <Link to="/dashboard/profile-page">Profile Page</Link>
            </div>
          </a>
        </li>
      )}
      {role === "member" && (
        <li className="px-3">
          <a className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 ">
            <div className="flex items-center self-center">
             
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
              <Link to="/dashboard/booked-trainer">Book Trainer</Link>
            </div>
          </a>
        </li>
      )}
 
    </Fragment>
  );

  return (
    <div className="flex  justify-center items-center ">
      {/*  <!-- Component: Basic side navigation menu --> */}
      {/*  <!-- Mobile trigger --> */}

      {/*  <!-- Backdrop --> */}

      <div className=" my-6 ">
        <Outlet></Outlet>
      </div>
      <div>
        <button
          title="Side navigation"
          type="button"
          className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
            isSideNavOpen
              ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
              : ""
          }`}
          aria-haspopup="menu"
          aria-label="Side navigation"
          aria-expanded={isSideNavOpen ? " true" : "false"}
          aria-controls="nav-menu-1"
          onClick={() => setIsSideNavOpen(!isSideNavOpen)}
        >
          <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
            <span
              aria-hidden="true"
              className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
            ></span>
            <span
              aria-hidden="true"
              className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
            ></span>
            <span
              aria-hidden="true"
              className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
            ></span>
          </div>
        </button>

        {/*  <!-- Side Navigation --> */}
        <aside
          id="nav-menu-1"
          aria-label="Side navigation"
          className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
            isSideNavOpen ? "translate-x-0" : " -translate-x-full"
          }`}
        >
          <a
            aria-label="WindUI logo"
            className="flex items-center gap-2 whitespace-nowrap p-6 text-xl font-medium focus:outline-none"
            href="javascript:void(0)"
          >
          
          <h1 className="text-2xl font-serif">       <span className="text-blue-400  text-3xl"> Trainer</span> Queest</h1>
          
          </a>
          <nav
            aria-label="side navigation"
            className="flex-1 divide-y divide-slate-100 overflow-auto"
          >
            <div>
              <ul className="flex flex-1 flex-col gap-1 py-3">{links}</ul>
            </div>
          </nav>
        </aside>

        {/*  <!-- Backdrop --> */}
        <div
          className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
            isSideNavOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsSideNavOpen(false)}
        ></div>
      </div>
    </div>
  );
};

export default Dashboard;
