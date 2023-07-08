import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Navbar from "../components/navbar/Navbar";
import DetailsForm from "../components/form/DetailsForm";

const PrivateRouting = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
        // children: [
        //   {
        //     path: "/detailsform",
        //     element: <DetailsForm />,
        //   },
        // ],
      },
    ],
  },
]);

export default PrivateRouting;
