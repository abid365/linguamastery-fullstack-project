import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Layouts/Home/Home/Home";
import Instructors from "../Layouts/Instructors/Instructors";
import Classes from "../Layouts/Classes/Classes";
import Dashboard from "../Layouts/Dashboard/Dashboard/Dashboard";
import About from "../Layouts/About/About";
import LogIn from "../Layouts/Login/LogIn";
import SignUp from "../Layouts/SignUp/SignUp";
import ErrorElement from "../Components/ErrorElement";
import SelectedClass from "../Layouts/Selected Class/SelectedClass";
import MySeClasses from "../Layouts/Dashboard/My Selected Classes/MySeClasses";
import EnrolledClasses from "../Layouts/Dashboard/Enrolled/EnrolledClasses";
import PaymentHis from "../Layouts/Dashboard/Payment History/PaymentHis";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      /*  {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      }, */
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myclass/:id",
        element: <SelectedClass></SelectedClass>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-12-server-green.vercel.app/inst/${params.id}`
          ),
      },
    ],
    errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/selectedClasses",
        element: <MySeClasses></MySeClasses>,
      },
      {
        path: "/dashboard/enrolledClasses",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "/dashboard/history",
        element: <PaymentHis></PaymentHis>,
      },
    ],
    errorElement: <ErrorElement></ErrorElement>,
  },
]);

export default router;
