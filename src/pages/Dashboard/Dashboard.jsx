import React, { Fragment, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useRole from "../../hook/useRole";
import Loading from "../../component/Loading/Loading";
import { ImCross } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoMailOpen } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { VscGitStashApply } from "react-icons/vsc";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxActivityLog } from "react-icons/rx";
import { SiGoogleclassroom } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";

const Dashboard = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
const [role,setRole]=useState("")



  const [isAdmin, setIsAdmin] = useState("isAdmin");
  const [isTrainer, setIsTrainer] = useState("");
  //consolelog(role);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
    <div>


   


    <div className=" lg:pt-24 pt-20 bg-[#141414] ">

  {" "}
  <div className="flex h-screen  relative border-t-2">
    <aside
      className={`absolute inset-y-0 left-0 z-10 border-r-2  w-64 overflow-y-auto transition duration-300 transform bg-[#141414]  dark:bg-gray-800 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:static md:inset-0`}
    >
      <div className="flex items-center justify-center pt-8">
        <div className="text-xl flex  justify-between w-full px-10 font-semibold text-white">
          Dashboard{" "}
          <button
            className="text-gray-500 focus:outline-none md:hidden"
            onClick={toggleSidebar}
          >
            <ImCross className="text-white text-xl" />
          </button>
        </div>
      </div>
      <nav className="">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
              isActive
                ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                : "md:text-white text-white"
            } `
          }
        >
  
          <CgProfile className="mr-2" /> Profile
        </NavLink>
            <>
      
            <NavLink
              to="/dashboard/activity-log"
              className={({ isActive }) =>
                `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                  isActive
                    ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                    : "md:text-white text-white"
                } `
              }
            >
              <RxActivityLog className="mr-2" /> Activity log
            </NavLink>
            <NavLink
              to="/dashboard/booked-trainer"
              className={({ isActive }) =>
                `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                  isActive
                    ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                    : "md:text-white text-white"
                } `
              }
            >
              <GiTeacher className="mr-2" /> Booked trainers
            </NavLink>
          </>
            
        







        {isAdmin  === "isAdmin" && (
          <>
            {" "}
            <NavLink
              to="/dashboard/balance"
              className={({ isActive }) =>
                `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                  isActive
                    ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                    : "md:text-white text-white"
                } `
              }
            >
              <MdAccountBalanceWallet className="mr-2" /> balance
            </NavLink>
            <NavLink
              to="/dashboard/subscribe"
              className={({ isActive }) =>
                `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                  isActive
                    ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                    : "md:text-white text-white"
                } `
              }
            >
              <IoMailOpen className="mr-2" /> subscribe
            </NavLink>
            <NavLink
              to="/dashboard/all-trainer"
              className={({ isActive }) =>
                `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                  isActive
                    ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                    : "md:text-white text-white"
                } `
              }
            >
              <FaChalkboardTeacher className="mr-2" /> All Trainers
            </NavLink>
            <NavLink
              to="/dashboard/applied-trainer"
              className={({ isActive }) =>
                `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                  isActive
                    ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                    : "md:text-white text-white"
                } `
              }
            >
              <VscGitStashApply className="mr-2" /> Applied Trainer
            </NavLink>
            <NavLink
              to="/dashboard/add-newClass"
              className={({ isActive }) =>
                `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                  isActive
                    ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                    : "md:text-white text-white"
                } `
              }
            >
              <SiGoogleclassroom className="mr-2" /> Add new Class
            </NavLink>
          </>
        ) 
}
    

{
 isTrainer && "Trainer"  (
          <>
            {" "}
            <NavLink
              to="/dashboard/manageClasses"
              className={({ isActive }) =>
                `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                  isActive
                    ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                    : "md:text-white text-white"
                } `
              }
            >
              <SiGoogleclassroom className="mr-2" /> manage classes
            </NavLink>
            <NavLink
              to="/dashboard/addSession"
              className={({ isActive }) =>
                `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                  isActive
                    ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                    : "md:text-white text-white"
                } `
              }
            >
              <SiGoogleclassroom className="mr-2" /> Add Session
            </NavLink>
          </>
        )
}
       
        {isAdmin || isTrainer ? (
          <NavLink
            to="/dashboard/addNew-forum"
            className={({ isActive }) =>
              `text-base font-bold   px-6 py-2 mt-4 w-full flex items-center   hover:bg-gray-200 dark:hover:bg-gray-700 duration-500 hover:text-gray-700 dark:hover:text-gray-200 uppercase ${
                isActive
                  ? "   inter  text-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
                  : "md:text-white text-white"
              } `
            }
          >
         {/*    <RxActivityLog className="mr-2" />  */}Add new Forum
          </NavLink>
        ) : (
          ""
        )}
      </nav>
    </aside>

    <div className="flex flex-col flex-1 w-full overflow-hidden ">
      <main className="flex-1 overflow-x-hidden overflow-y-auto  bg-[#141414]">
        <div className="container mx-auto px-6 py-8">
          <button
            className="text-gray-500 focus:outline-none md:hidden"
            onClick={toggleSidebar}
          >
            <FaBarsStaggered className="text-white text-xl" />
          </button>
          <Outlet />
        </div>
      </main>
    </div>
  </div>
</div>




    </div>

  );
};

export default Dashboard;
