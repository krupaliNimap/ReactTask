import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SideNav from "./SideNav";
import Home from "../components/Home";
import About from "../components/About";

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
    ],
  },
]);

export default PrivateRouting;
