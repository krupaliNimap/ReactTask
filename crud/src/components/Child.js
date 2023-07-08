import React from "react";

function Child({ counter, counterFunction }) {
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => counterFunction(counter + 1)}>
        Increment Count
      </button>
    </div>
  );
}

export default Child;
