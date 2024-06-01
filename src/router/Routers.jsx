import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from './../pages/register/Register';
import Errors from "../Error/Error";
import AllTrainer from "../pages/allTrainer/AllTrainer";
import AllClassPage from "../pages/allClass/AllClassPage";
import Comunity from "../pages/comunity/Comunity";
import Dashboard from './../pages/Dashboard/Dashboard';
import PrivateRoute from "../private/PrivateRoute";
import TrainerDetail from "../pages/allTrainer/TrainerDetal/TrainerDetail";
import TrainerBooking from "../pages/allTrainer/TrainerBooking/TrainerBooking";
import BecomeATrainer from "../pages/allTrainer/BecomeATrainer/BecomeATrainer";

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
},
{
    path:'/all-trainer',
    element:<AllTrainer></AllTrainer>
},
{
    path:'/trainer-detail',
    element:<TrainerDetail></TrainerDetail>
},
{
    path:'/trainer-booking',
    element:<TrainerBooking></TrainerBooking>
},
{
    path:'/become-trainer',
    element:<BecomeATrainer></BecomeATrainer>
},
{
    path:'/all-class',
    element:<AllClassPage></AllClassPage>
},
{
    path:'/comunity',
    element:<Comunity></Comunity>
},
{
    path:'/dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
},
/* DASBOARD................. */






      ]
    },
  ]);