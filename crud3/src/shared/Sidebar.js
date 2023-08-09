import React, { Fragment } from "react";
import "./styles/Styles.css";
import { Link } from "react-router-dom";

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
          <Link to="/" className="sidebar-subcontent">
            Home
          </Link>
          <Link to="/about" className="sidebar-subcontent">
            About
          </Link>
          <Link to="/task" className="sidebar-subcontent">
            Tasks
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
