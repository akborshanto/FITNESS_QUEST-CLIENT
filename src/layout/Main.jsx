import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../shared/navbar/Navbar'
import Footer from '../shared/footer/Footer'

const Main = () => {
  return (
    <div className=' container mx-auto '>
    <Navbar></Navbar>
    <div className=' min-h-screen'>
    <Outlet></Outlet>
    </div>

    <Footer></Footer>
    </div>
  )
}

export default Main
