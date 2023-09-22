import React from "react";
import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return {
        ...state,
        secondCounter: state.secondCounter + action.value,
      };
    case "decrement2":
      return {
        ...state,
        secondCounter: state.secondCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Child2 = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>useReducer Example</p>
      <h3>Counter : {counter.firstCounter}</h3>
      <h3>Second Counter : {counter.secondCounter}</h3>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment by 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement by 1
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 10 })}>
        Increment by 10
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 10 })}>
        Decrement by 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Child2;
