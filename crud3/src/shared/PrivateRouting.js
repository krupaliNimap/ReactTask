import React from "react";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const SideNav = lazy(() => import("./SideNav"));
const Home = lazy(() => import("../components/home/Home"));
const About = lazy(() => import("../components/about/About"));
const Parent1 = lazy(() => import("../components/task_1/Parent_1"));
const Parent2 = lazy(() => import("../components/task_2/Parent_2"));
const Parent3 = lazy(() => import("../components/task_3/Parent_3"));
const Parent4 = lazy(() => import("../components/task_4/Parent_4"));
const Parent5 = lazy(() => import("../components/task_5/Parent_5"));
const Parent6 = lazy(() => import("../components/task_6/Parent_6"));
const Parent7 = lazy(() => import("../components/task_7/Parent_7"));
const Parent8 = lazy(() => import("../components/task_8/Parent_8"));
const Parent9 = lazy(() => import("../components/task_9/Parent_9"));
const Child1 = lazy(() => import("../components/task_9/Child_1"));
const Child2 = lazy(() => import("../components/task_9/Child_2"));
const Test = lazy(() => import("../components/test/Test"));
const Parent10 = lazy(() => import("../components/task_10/Parent_10"));
const Child10_1 = lazy(() => import("../components/task_10/Child_1"));
const Child10_2 = lazy(() => import("../components/task_10/Child_2"));
const Todo = lazy(() => import("../components/todo/Todo"));
const Parent_1 = lazy(() => import("../components/task_11/redux/Parent_1"));
const Login = lazy(() => import("../components/register/Login"));
const Parent12 = lazy(() => import("../components/task_12/Parent12"));
const Register = lazy(() => import("./../components/register/Register"));
const Parent13 = lazy(() => import("../components/task_13/Parent13"));
const Task = lazy(() => import("./../components/Task"));
const Parent14 = lazy(() => import("../components/task_14/Parent14"));
const Parent15 = lazy(() => import("../components/task_15/Parent15"));

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
          {
            path: `/task/13`,
            element: <Parent13 />,
          },
          {
            path: `/task/14`,
            element: <Parent14 />,
          },
          {
            path: `/task/15`,
            element: <Parent15 />,
          },
        ],
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
]);

export default PrivateRouting;
