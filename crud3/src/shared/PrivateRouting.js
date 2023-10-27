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
import Parent6 from "../components/task_6/Parent_6";
import Parent7 from "../components/task_7/Parent_7";
import Parent8 from "../components/task_8/Parent_8";
import Parent9 from "../components/task_9/Parent_9";
import Child1 from "../components/task_9/Child_1";
import Child2 from "../components/task_9/Child_2";
import Test from "../components/test/test";
import Parent10 from "../components/task_10/Parent_10";
import Child10_1 from "../components/task_10/Child_1";
import Child10_2 from "../components/task_10/Child_2";
import Todo from "../components/todo/Todo";
import Parent_1 from "../components/task_11/redux/Parent_1";
import Login from "../components/register/Login";
import Parent12 from "../components/task_12/Parent12";
import Register from "./../components/register/Register";

const PrivateRouting = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
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
        path: "/todo",
        element: <Todo />,
      },
      // {
      //   path: "/test",
      //   element: <Test />,
      // },
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
          {
            path: `/task/7`,
            element: <Parent7 />,
          },
          {
            path: `/task/8`,
            element: <Parent8 />,
          },
          {
            path: `/task/9`,
            element: <Parent9 />,
            children: [
              {
                path: `/task/9/1`,
                element: <Child1 />,
              },
              {
                path: `/task/9/2`,
                element: <Child2 />,
              },
            ],
          },
          {
            path: `/task/10`,
            element: <Parent10 />,
            children: [
              {
                path: `/task/10/1`,
                element: <Child10_1 />,
              },
              {
                path: `/task/10/2`,
                element: <Child10_2 />,
              },
            ],
          },
          {
            path: `/task/11`,
            element: <Parent_1 />,
          },
          {
            path: `/task/12`,
            element: <Parent12 />,
          },
        ],
      },
    ],
  },
]);

export default PrivateRouting;
