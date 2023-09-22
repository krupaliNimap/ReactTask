import React from "react";
import { useReducer } from "react";

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

const Child1 = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>useReducer Example</p>
      <h3>Counter : {counter}</h3>
      <button onClick={() => dispatch("increment")}>Increment by 1</button>
      <button onClick={() => dispatch("decrement")}>Decrement by 1</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default Child1;
