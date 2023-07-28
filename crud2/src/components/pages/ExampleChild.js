import React from "react";

const ExampleChild = ({ counter, setCounter }) => {
  //   console.log("counter.counter :>> ", counter.counter);
  const handleIncrement = () =>
    setCounter({ ...counter, counter: counter.counter + 1 });
  console.log("counter.counter :>> ", counter.counter);
  //   console.log("object :>> ", object);//
  return (
    <div>
      <button onClick={handleIncrement}>Add</button>
    </div>
  );
};

export default ExampleChild;
