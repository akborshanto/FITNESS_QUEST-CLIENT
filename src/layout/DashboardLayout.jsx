import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../shared/navbar/Navbar';
import Footer from './../shared/footer/Footer';

const DashboardLayout = () => {
  return (
    <div>
      
<Navbar></Navbar>
    <Outlet></Outlet>
 
    </div>
  )
}

export default DashboardLayout
