import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from './../pages/register/Register';
import Errors from "../Error/Error";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Errors></Errors>,
      /* MAIN CHILDREN */
      children:[
{
    path:'/',
    element:<Home></Home>
},

{
    path:'/login',
    element:<Login></Login>
},
{
    path:'/register',
    element:<Register></Register>
}


      ]
    },
  ]);