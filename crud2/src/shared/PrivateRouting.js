import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

const PrivateRouting = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
]);

export default PrivateRouting;
