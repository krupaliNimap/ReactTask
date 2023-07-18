import React, { Fragment } from "react";
import "../styles/Navbar.css";
import { Link, Outlet } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    // <div>
    <Fragment>
      <div className="navbar">
        <div className="image">
          <img
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/09/Microsoft_Forms_%282019-present%29.svg"
          />
        </div>
        <div className="sub-navbar">
          <Link className="sub-navbar1" to="/">
            Home
          </Link>
          <Link className="sub-navbar1" to="/contact">
            Contact
          </Link>
          <Link className="sub-navbar1" to="/details">
            Details
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
    // </div>
  );
}

export default Navbar;
