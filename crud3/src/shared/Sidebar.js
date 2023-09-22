import React, { Fragment } from "react";
import "./styles/Styles.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="sidebar-container">
        <img
          className="react-image"
          src={require("./../assets/images/ReactLogo.png")}
          alt="react"
        ></img>
        <div className="sidebar-content">
          <NavLink to="/" className="sidebar-subcontent">
            Home
          </NavLink>
          <NavLink to="/about" className="sidebar-subcontent">
            About
          </NavLink>
          <NavLink to="/todo" className="sidebar-subcontent">
            To Do
          </NavLink>
          <NavLink to="/task" className="sidebar-subcontent">
            Tasks
          </NavLink>
          <NavLink to="/test" className="sidebar-subcontent">
            Test
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
