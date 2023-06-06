import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layouts/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
    ],
  },
]);

export default router;
