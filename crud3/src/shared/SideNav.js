import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <div className="mainbar">
        <Sidebar />
        <div className="topbar">
          <Navbar />
          <div className="maindiv">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
