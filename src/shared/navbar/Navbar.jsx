//import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import React, { Fragment, useEffect, useState } from "react";
import useAuth from "../../auth/Auth";
import { Link, NavLink } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import UseButton from "../../component/button/Button";

const Navbar = () => {
  const { user, logOut ,loading} = useAuth();
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);


  const toggleDropdown = () => {
    setOpenNav(!openNav);
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleLogoutBtn = () => {
    signOutUser();
    toast.success("Log out successful");
  };
  const LogOut = () => [logOut()];

  const list = (
    <Fragment>
    <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `text-sm font-bold text-white   uppercase ${
          isActive
            ? "   inter border-2 border-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
            : "md:text-white"
        } `
      }
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/all-trainer"
      className={({ isActive }) =>
        `text-sm font-bold text-white   uppercase ${
          isActive
            ? "   inter border-2 border-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
            : "md:text-white"
        } `
      }
    >
      Trainers
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/all-class"
      className={({ isActive }) =>
        `text-sm font-bold text-white   uppercase ${
          isActive
            ? "   inter border-2 border-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
            : "md:text-white"
        } `
      }
    >
      Classes
    </NavLink>
  </li>
  {user ? (
    <li>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `text-sm font-bold text-white   uppercase ${
            isActive
              ? "   inter border-2 border-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
              : "md:text-white"
          } `
        }
      >
        Dashboard
      </NavLink>
    </li>
  ) : (
    ""
  )}
  <li>
    <NavLink
      to="/community"
      className={({ isActive }) =>
        `text-sm font-bold text-white   uppercase ${
          isActive
            ? "   inter border-2 border-[#007BFF] border-x-0 rounded-none border-t-0 bg-transparent"
            : "md:text-white"
        } `
      }
    >
      Community
    </NavLink>
  </li>
    </Fragment>
  );

  return (
    <div
    className={`${
      !scrolled
        ? " duration-500"
        : "bg-black bg-opacity-40 backdrop-blur-md duration-500 text-white  "
    } w-full fixed z-50    `}
  >
    <nav className="md:h-[70px] h-14 flex items-center  px-5 py-2">
      <div className="h-full flex justify-between w-full items-center">
        <div className="h-full ">
          <Link to={"/"}>
            <img
              src="https://i.ibb.co/8bY004Y/2024-05-26-00-05-25-Window-removebg-preview.png"
              alt=""
              className="h-full"
            />
          </Link>
        </div>
        <div className="flex flex-1  justify-end items-center gap-3">
          {/* list of nav ber  */}
          <div className="md:block hidden  ">
            <ul className="flex space-x-5 ">{list}</ul>
          </div>
          <div className="flex items-center">
            {!loading ? (
              user ? (
                <Avater />
              ) : (
                <div className="flex gap-3">
                  <Link to={"/login"}>
                    <button className=" px-4 p-2 md:text-sm text-xs rounded-full border bg-[#007BFF]  font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                      Log in
                    </button>
                  </Link>
                  <Link to={"/register"}>
                    <button className=" hidden lg:block px-4 p-2 rounded-full md:text-sm text-xs border bg-[#007BFF] font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                      Register
                    </button>
                  </Link>
                </div>
              )
            ) : (
              ""
            )}
          </div>
          <div>
            <div className="drawer">
              <input
                id="my-drawer"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content md:hidden block">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer"
                  className="  drawer-button text-2xl text-white cursor-pointer"
                >
               {/*    <Fabars /> */}ICON
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu  bg-black  min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  {list}
                  {user ? (
                    <li className="text-white bg-error rounded-lg">
                      <a
                        href="#"
                        onClick={handleLogoutBtn}
                        className="gap-3
           px-4 py-2   flex items-center"
                      >
                        <CiLogin className="text-xl " /> Sign out
                      </a>
                    </li>
                  ) : (
                    <div className="flex flex-col gap-3 w-full">
                      <Link to={"/login"} className="w-full">
                        <button className="w-full px-4 p-2 md:text-sm text-xs rounded-full border bg-[#007BFF]  font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                          Log in
                        </button>
                      </Link>
                      <Link to={"/signup"} className="w-full">
                        <button className=" w-full  px-4 p-2 rounded-full md:text-sm text-xs border bg-[#007BFF] font-bold border-[#007BFF] bt text-white hover:bg-transparent hover:text-[#007BFF] duration-500">
                          Register
                        </button>
                      </Link>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  );
};

export default Navbar;
