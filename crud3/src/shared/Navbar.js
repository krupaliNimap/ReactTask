import React from "react";
import "./styles/Styles.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <NavLink to="/login">login</NavLink>
      </div>
    </>
  );
};

export default Navbar;
