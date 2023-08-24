import React from "react";
import { Link, Outlet } from "react-router-dom";

const Task = () => {
  return (
    <>
      <div className="taskbutton-container">
        <Link to="/task/1">Task 1</Link>
        <Link to="/task/2">Task 2</Link>
        <Link to="/task/3">Task 3</Link>
        <Outlet />
      </div>
    </>
  );
};

export default Task;