import React from "react";
import { useState } from "react";

const higerOrderComponent = (OriginalComponent) => {
  function NewComponent() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
      setCount(count + 1);
    };
    return <OriginalComponent count={count} handleCount={handleCount} />;
  }
  return NewComponent;
};

export default higerOrderComponent;
