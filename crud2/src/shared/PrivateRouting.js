import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../components/pages/Home"));
const Details = lazy(() => import("../components/pages/Details"));
const Navbar = lazy(() => import("../components/Navbar"));
const Contact = lazy(() => import("../components/pages/Contact"));

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
