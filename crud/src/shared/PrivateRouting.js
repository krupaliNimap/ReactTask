import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import ApiCrud from "../components/apiCrud/ApiCrud";

const PrivateRouting = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <ApiCrud />,
      },
    ],
  },
]);

export default PrivateRouting;
