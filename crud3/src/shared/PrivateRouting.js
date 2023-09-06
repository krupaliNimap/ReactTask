import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SideNav from "./SideNav";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Task from "../components/Task";
import Parent1 from "../components/task_1/Parent_1";
import Parent2 from "../components/task_2/Parent_2";
import Parent3 from "../components/task_3/Parent_3";
import Parent4 from "../components/task_4/Parent_4";
import Parent5 from "../components/task_5/Parent_5";
import Parent6 from "./../components/task_6/Parent_6";

const PrivateRouting = createBrowserRouter([
  {
    path: "/",
    element: <SideNav />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/task",
        element: <Task />,
        children: [
          {
            path: `/task/1`,
            element: <Parent1 />,
          },
          {
            path: `/task/2`,
            element: <Parent2 />,
          },
          {
            path: `/task/3`,
            element: <Parent3 />,
          },
          {
            path: `/task/4`,
            element: <Parent4 />,
          },
          {
            path: `/task/5`,
            element: <Parent5 />,
          },
          {
            path: `/task/6`,
            element: <Parent6 />,
          },
        ],
      },
    ],
  },
]);

export default PrivateRouting;
