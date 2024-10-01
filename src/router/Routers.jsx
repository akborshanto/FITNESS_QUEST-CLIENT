import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "./../pages/register/Register";
import Errors from "../Error/Error";
import AllTrainer from "../pages/allTrainer/AllTrainer";
import AllClassPage from "../pages/allClass/AllClassPage";
import Comunity from "../pages/comunity/Comunity";
import Dashboard from "./../pages/Dashboard/Dashboard";
import PrivateRoute from "../private/PrivateRoute";
import TrainerDetail from "../pages/allTrainer/TrainerDetal/TrainerDetail";
import TrainerBooking from "../pages/allTrainer/TrainerBooking/TrainerBooking";
import BecomeATrainer from "../pages/allTrainer/BecomeATrainer/BecomeATrainer";

import NewsLetterAdmin from "../pages/Dashboard/admin/newLetter/NewsLetter";
import AllTrainerAdmin from "./../pages/Dashboard/admin/allTrainer/AllTrainerAdmin";
import AppliedTrainerAdmin from "./../pages/Dashboard/admin/Applied Trainer/AppliedTrainer";
import BalanceAdmin from "./../pages/Dashboard/admin/balance/BalanceAdmin";
import AddNewClassAdmin from "./../pages/Dashboard/admin/addNewClss/AddNewClass";
import AddNewForum from "../pages/Dashboard/trainer/addNewForum/AddNewForum";
// import ExploreForum from "../pages/home/forumPost/ExploreForum";
import ManageSlots from "./../pages/Dashboard/trainer/manageSlots/ManageSlots";
import AddNewSlot from "./../pages/Dashboard/trainer/addNewSLot/AddNewSlot";
import SingeleApplid from "../pages/Dashboard/admin/Applied Trainer/SingeleApplid";
import ComunityDetail from "../pages/home/ComuntiySection/ComunityDetail";
import ActivateLog from "../pages/Dashboard/member/activityLog/ActivateLog";
import ProfilePage from "./../pages/Dashboard/member/profilepage/ProfilePage";
import RecomendClass from "../pages/Dashboard/member/review/RecomendClass";
import BookedTrainer from "./../pages/Dashboard/member/bookedTrainr/BookedTrainer";
import DashbordPrivate from "../private/DashbordPrivate";
import AppliedTrainerDetail from "../pages/Dashboard/admin/Applied Trainer/AppliedTrainerDetail";

import { Payment } from './../pages/PAYMENT/Payment';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errors></Errors>,
    /* MAIN CHILDREN */
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      /* FOEUM POAR */

      // {
      //     path:'/forum/:id',
      //     element:<ExploreForum></ExploreForum>,
      //     loader:({params})=> fetch(`{import.meta.env}/forum/${params.id}`)

      // },
      {
        path: "/all-trainer",
        element: <AllTrainer></AllTrainer>,
      },
      {
        path: "/trainer/:id",
        element: <TrainerDetail></TrainerDetail>,
        //loader:({params})=>fetch(`${import.meta.env>VITE_API_URL}/trainer-detail/${params.id}`)
      },
      {
        path: "/trainer-booking/:id",
        element: (
   
            <TrainerBooking></TrainerBooking>
       
        ),
      },
      {
        path: "/become-trainer",
        element: (
       
            <BecomeATrainer></BecomeATrainer>
         
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            {" "}
        <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-class",
        element: <AllClassPage></AllClassPage>,
        loader: () =>
          fetch(`${import.meta.env.VITE_API_URL}/addNewClassAdmins`),
      },
      {
        path: "/community",
        element: <Comunity></Comunity>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/all-forum-count`),
      },
      {
        path: "/comunityDetail/:id",
        element: <ComunityDetail></ComunityDetail>,
      },
    ],
  },
  /* ========= DASHBOARD🚩🏴‍☠️========
============================ */
  {
    path: "dashboard",
    element: (
      <DashbordPrivate>
      
        <Dashboard></Dashboard>
      </DashbordPrivate>
    ),
    children: [
      /* 🚩ADMIN🚩 */
      {
        path: "subscriber",
        element: (
          <DashbordPrivate>
            <NewsLetterAdmin></NewsLetterAdmin>
          </DashbordPrivate>
        ),
      },
      ,
      {
        path: "all-trainer",
        element: <AllTrainerAdmin></AllTrainerAdmin>,
      },
      ,
      {
        path: "applied-trainer",
        element: <AppliedTrainerAdmin></AppliedTrainerAdmin>,
      },
      {
        path: "applied-trainer-detail/:id",
        element: <AppliedTrainerDetail></AppliedTrainerDetail>,
      },

      ,
      /* practiceeeee======================= */
      {
        path: "singelApplied/:id",
        element: <SingeleApplid></SingeleApplid>,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_API_URL}/singleTrainerData/${params.id}`
          ),
      } /* ============================================== */,

      ,
      {
        path: "balance",
        element: <BalanceAdmin></BalanceAdmin>,
      },
      ,
      {
        path: "addClasses",
        element: <AddNewClassAdmin></AddNewClassAdmin>,
      },
      ,
      /* 🚩TRAINERs🚩 */
      {
        path: "manage-slot",
        element: <ManageSlots></ManageSlots>,
      },
      ,
      {
        path: "add-new-session",
        element: <AddNewSlot></AddNewSlot>,
      },
      ,
      {
        path: "addNew-forum",
        element: <AddNewForum></AddNewForum>,
      },

      /* 🚩MEMBER🚩 */
      {
        path: "activity-log",
        element: <ActivateLog></ActivateLog>,
      },
      {
        path: "",
        element: <ProfilePage></ProfilePage>,
      },
      {
        path: "recomend-class",
        element: <RecomendClass></RecomendClass>,
      },
      {
        path: "booked-trainer",
        element: <BookedTrainer></BookedTrainer>,
      },
    ],
  },
]);
