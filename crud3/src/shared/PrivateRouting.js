import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SideNav from "./SideNav";

const privateRouting = createBrowserRouter([
  {
    path: "/",
    element: <SideNav />,
  },
]);

export default privateRouting;
