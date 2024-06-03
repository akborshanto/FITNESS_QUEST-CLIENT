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
import Payment from "../pages/PAYMENT/Payment";
import NewsLetterAdmin from "../pages/Dashboard/admin/newLetter/NewsLetter";
import AllTrainerAdmin from './../pages/Dashboard/admin/allTrainer/AllTrainerAdmin';
import AppliedTrainerAdmin from './../pages/Dashboard/admin/Applied Trainer/AppliedTrainer';
import BalanceAdmin from './../pages/Dashboard/admin/balance/BalanceAdmin';
import AddNewClassAdmin from './../pages/Dashboard/admin/addNewClss/AddNewClass';

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
    path:'/payment',
    element:<Payment></Payment>
},
{
    path:'/all-class',
    element:<AllClassPage></AllClassPage>
},
{
    path:'/comunity',
    element:<Comunity></Comunity>
},

/* DASBOARD................. */

{
    path:'/dashboard',
    element:<Dashboard></Dashboard>
},





      ]
    },
/* ========= DASHBOARD🚩🏴‍☠️========
============================ */

{

path:'dashboard',
element:<Dashboard></Dashboard>,
children:[

/* 🚩ADMIN🚩 */
{
    path:'news-letter',
    element:<PrivateRoute><NewsLetterAdmin></NewsLetterAdmin></PrivateRoute>

},
,{
    path:'all-trainer',
    element:<AllTrainerAdmin></AllTrainerAdmin>

},
,{
    path:'applied-trainer',
    element:<AppliedTrainerAdmin></AppliedTrainerAdmin>

},
,{
    path:'balance',
    element:<BalanceAdmin></BalanceAdmin>

},
,{
    path:'add-newClass',
    element:<AddNewClassAdmin></AddNewClassAdmin>

},




]


}


  ]);
  