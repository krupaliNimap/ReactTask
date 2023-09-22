import React from "react";
import { Link, Outlet } from "react-router-dom";

const Parent9 = () => {
  return (
    <>
      <p>ContextAPI example</p>
      <Link to="/task/9/1">Increment by 1</Link>
      <Link to="/task/9/2">Increment by 2</Link>
      <Outlet />
    </>
  );
};

export default Parent9;
