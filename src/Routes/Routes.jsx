import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginRegister/Login/Login";
import Register from "../Pages/LoginRegister/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import UserClasses from "../Pages/Dashboard/UserDashboard/UserClasses/UserClasses";
import DashboardLayout from "../Layouts/DashboardLayout";
import EnrollClasses from "../Pages/Dashboard/UserDashboard/EnrollClasses/EnrollClasses";
import PaymentHistory from "../Pages/Dashboard/UserDashboard/PaymentHistory/PaymentHistory";
import PrivateProvider from "../Provider/PrivateProvider/PrivateProvider";
import AddAClass from "../Pages/Dashboard/InstractorDashboard/AddAClass/AddAClass";
import MyClasses from "../Pages/Dashboard/InstractorDashboard/MyClasses/MyClasses";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import AboutUs from "../Pages/Shared/AboutUs/AboutUs";
import ContactUs from "../Pages/Shared/ContactUs/ContactUs";
import InstractorProvider from "../Provider/InstractorProvider/InstractorProvider";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import Feedback from "../Pages/Dashboard/AdminDashboard/ManageClasses/Feedback";
import AdminProvider from "../Provider/AdminProvider/AdminProvider";
import Payment from "../Pages/Dashboard/UserDashboard/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateProvider><DashboardLayout></DashboardLayout></PrivateProvider>,
    children: [
      {
        path: 'userClass',
        element: <UserClasses></UserClasses>
      },
      {
        path: 'enrolledClasses',
        element: <EnrollClasses></EnrollClasses>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'payment/:id',
        element: <Payment></Payment>
      },
      {
        path: 'addAClass',
        element: <InstractorProvider><AddAClass></AddAClass></InstractorProvider>
      },
      {
        path: 'myClasses',
        element: <InstractorProvider><MyClasses></MyClasses></InstractorProvider>
      },
      {
        path: 'dashboardHome',
        element: <DashboardHome></DashboardHome>
      },
      {
        path:'manageClasses',
        element:<AdminProvider><ManageClasses></ManageClasses></AdminProvider>
      },
      {
        path:'manageUsers',
        element:<AdminProvider><ManageUsers></ManageUsers></AdminProvider>
      },
      {
        path:'feedback/:id',
        element:<AdminProvider><Feedback></Feedback></AdminProvider>
      }
    ]
  }
]);

export default router;