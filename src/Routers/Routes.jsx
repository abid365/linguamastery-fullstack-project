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
import PrivateRouter from "./PrivateRouter";
import ManageClass from "../Layouts/Dashboard/ManageClassAdmin/ManageClass";
import ManageUsers from "../Layouts/Dashboard/ManageUsersAdmin/ManageUsers";
import Addaclass from "../Layouts/Dashboard/AddAClass/Addaclass";
import ClassbyInstructor from "../Layouts/Dashboard/ClassbyInstructor/ClassbyInstructor";
import AdminRoute from "./AdminRoute";
import Payment from "../Layouts/Dashboard/Payment/Payment";

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
        element: (
          <PrivateRouter>
            <SelectedClass></SelectedClass>
          </PrivateRouter>
        ),
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
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
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
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/manage_classes",
        element: (
          <AdminRoute>
            <ManageClass></ManageClass>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage_users",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add_a_class",
        element: <Addaclass></Addaclass>,
      },
      {
        path: "/dashboard/classes_by_instructor",
        element: <ClassbyInstructor></ClassbyInstructor>,
      },
    ],
    errorElement: <ErrorElement></ErrorElement>,
  },
]);

export default router;
