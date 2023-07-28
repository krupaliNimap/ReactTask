import React, { useState } from "react";
import ExampleChild from "./ExampleChild";

const Example = () => {
  const [counter, setCounter] = useState({ counter: 0 });
  console.log("counter :>> ", counter);
  return (
    <div>
      Count : {counter.counter}
      <ExampleChild counter={counter} setCounter={setCounter} />
    </div>
  );
};

export default Example;
