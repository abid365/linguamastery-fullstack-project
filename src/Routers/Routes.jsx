import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Layouts/Home/Home/Home";
import Instructors from "../Layouts/Instructors/Instructors";
import Classes from "../Layouts/Classes/Classes";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import About from "../Layouts/About/About";
import LogIn from "../Layouts/Login/LogIn";
import SignUp from "../Layouts/SignUp/SignUp";
import ErrorElement from "../Components/ErrorElement";

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
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
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
    ],
    errorElement: <ErrorElement></ErrorElement>,
  },
]);

export default router;
