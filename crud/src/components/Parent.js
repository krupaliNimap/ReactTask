import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [counter, setCounter] = useState(0);
  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
    setCounter((prev) => prev - 1);
  };
  return (
    <div>
      <Child counter={counter} counterFunction={setCounter} />
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
}

export default Parent;
