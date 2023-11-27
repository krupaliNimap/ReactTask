import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Test = () => {
  const ref = useRef(0);
  console.log('ref', ref)

  return (
    <div>
      <input ref={ref} />
      <label>{ref?.current?.value}</label>
    </div>
  );
};

export default Test;
