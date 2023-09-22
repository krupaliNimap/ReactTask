import React from "react";
import { useContext } from "react";
import { MyContext } from "../../shared/MyContext";

const Child2 = () => {
  const { count, setCount } = useContext(MyContext);
  return (
    <div>
      <button onClick={() => setCount(count + 2)}>Increment count by 2</button>
      <div>{count}</div>
    </div>
  );
};

export default Child2;
