import React from "react";
import higerOrderComponent from "./higerOrderComponent";

const Child2 = ({ count, handleCount }) => {
  return (
    <div>
      <button onMouseOver={handleCount}>Hovered {count} times</button>
    </div>
  );
};

export default higerOrderComponent(Child2);
