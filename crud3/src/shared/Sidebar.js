import React, { Fragment } from "react";
import "./styles/Styles.css";
const Home = React.lazy(() => import("../components/Home"));

const Sidebar = () => {
  return (
    <Fragment>
      <div className="sidebar-container">
        <div>
          <Home />
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
