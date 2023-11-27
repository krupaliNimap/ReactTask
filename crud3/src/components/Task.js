import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Task = () => {
  return (
    <>
      <div className="taskbutton-container">
        <NavLink to="/task/1" className="task-button">
          Task 1
        </NavLink>
        <NavLink to="/task/2" className="task-button">
          Task 2
        </NavLink>
        <NavLink to="/task/3" className="task-button">
          Task 3
        </NavLink>
        <NavLink to="/task/4" className="task-button">
          Task 4
        </NavLink>
        <NavLink to="/task/5" className="task-button">
          Task 5
        </NavLink>
        <NavLink to="/task/6" className="task-button">
          Task 6
        </NavLink>
        <NavLink to="/task/7" className="task-button">
          Task 7
        </NavLink>
        <NavLink to="/task/8" className="task-button">
          Task 8
        </NavLink>
        <NavLink to="/task/9" className="task-button">
          Task 9
        </NavLink>
        <NavLink to="/task/10" className="task-button">
          Task 10
        </NavLink>
        <NavLink to="/task/11" className="task-button">
          Task 11
        </NavLink>
        <NavLink to="/task/12" className="task-button">
          Task 12
        </NavLink>
        <NavLink to="/task/13" className="task-button">
          Task 13
        </NavLink>
        <NavLink to="/task/14" className="task-button">
          Task 14
        </NavLink>
        <NavLink to="/task/15" className="task-button">
          Task 15
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Task;
