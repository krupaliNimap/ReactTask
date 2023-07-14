import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Contact from "../components/pages/Contact";
import Details from "../components/pages/Details";
import Home from "../components/pages/Home";

const PrivateRouting = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);

export default PrivateRouting;
