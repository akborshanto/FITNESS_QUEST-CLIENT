//import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import React, { Fragment } from "react";
import useAuth from "../../auth/Auth";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useAuth();


const LogOut=()=>[

  logOut()
]


  const links = (
    <Fragment>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/login">Login</NavLink>



      <NavLink to="/all-trainer">All Trainer Page</NavLink>
      <NavLink to="/all-class"> All Classes page</NavLink>
      <NavLink to="/comunity"> Comunity</NavLink>

      {/* DASHBOARD CONDITON */}

{
  user &&<NavLink to="/dashboard"> DashBoard</NavLink>
}



      
   
    </Fragment>
  );

  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
      {user ? (
        <>
          <div
            onClick={logOut}
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
          >
            Logout
          </div>
        </>
      ) : (
        <>
          <Link
            to='/login'
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
          >
            Login
          </Link>
         
        </>
      )}
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
          </div>
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            {links}
          </li>
         
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
