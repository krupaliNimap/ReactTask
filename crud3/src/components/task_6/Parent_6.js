import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Parent6 = () => {
  const [inputValue, setInputValue] = useState();
  const [debounceInputValue, setDebounceInputValue] = useState();
  const [counter, setCounter] = useState(0);
  const [debounceCounter, setDebounceCounter] = useState();
  useEffect(() => {
    const debounceFunction = setTimeout(() => {
      setDebounceInputValue(inputValue);
    }, 1000);
    return () => {
      clearTimeout(debounceFunction);
    };
  }, [inputValue]);
  useEffect(() => {
    const debounceFunction2 = setTimeout(
      () => setDebounceCounter(counter),
      1000
    );
    return () => {
      clearTimeout(debounceFunction2);
    };
  }, [counter]);
  return (
    <div>
      
      <p>Debouncing Example</p>
      <p>
        <input onChange={(e) => setInputValue(e.target.value)}></input>
        <div>Before Debounce Function : {inputValue}</div>
        <div>After Debounce Function : {debounceInputValue}</div>
      </p>
      <p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <div>Before Debounce Function : {counter}</div>
        <div>After Debounce Function : {debounceCounter}</div>
      </p>
    </div>
  );
};

export default Parent6;
