import React from "react";
import higerOrderComponent from "./higerOrderComponent";

const Child1 = ({ count, handleCount }) => {
  return (
    <div>
      <button onClick={handleCount}>Clicked {count} times</button>
    </div>
  );
};

export default higerOrderComponent(Child1);
