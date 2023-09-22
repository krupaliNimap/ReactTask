import React from "react";
import { useContext } from "react";
import { MyContext } from "../../shared/MyContext";

const Child1 = () => {
  const { count, setCount } = useContext(MyContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment count by 1</button>
      <div>{count}</div>
    </div>
  );
};

export default Child1;
