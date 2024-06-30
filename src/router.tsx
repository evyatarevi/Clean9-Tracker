import { createBrowserRouter } from "react-router-dom";
import {
  Exercises,
  Home,
  Login,
  NotFound,
  Recipes,
  Shakes,
  Signup,
  Tasks,
  LoggedLayout,
} from "./index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/app",
    element: <LoggedLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "shakes",
        element: <Shakes />,
      },
      {
        path: "exercises",
        element: <Exercises />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
