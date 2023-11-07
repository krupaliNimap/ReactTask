import React from "react";
import { useReducer } from "react";
import { NavLink, Outlet } from "react-router-dom";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Parent10 = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>useReducer Example</p>
      <div className="taskbutton-container">
        <NavLink to="/task/10/1" className="task-button">
          Basic useReducer
        </NavLink>
        <NavLink to="/task/10/2" className="task-button">
          Complex useReducer
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Parent10;
