import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import Example from "../components/pages/Example";
// import Home from "../components/pages/Home";
// import { Details } from "../components/pages/Details";
// import Navbar from "../components/Navbar";
// import Contact from "../components/pages/Contact";

const Home = lazy(() => import("../components/pages/Home"));
const Details = lazy(() => import("../components/pages/Details"));
const Navbar = lazy(() => import("../components/pages/Navbar"));
const Contact = lazy(() => import("../components/pages/Contact"));
const Example = lazy(() => import("../components/pages/Example"));

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
      {
        path: "/examples",
        element: <Example />,
      },
    ],
  },
]);

export default PrivateRouting;
