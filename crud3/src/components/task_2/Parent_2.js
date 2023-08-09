import React, { useState } from "react";

const Parent2 = () => {
  const [number, setNumber] = useState();
  let numDivisible = [];
  let temp = number;
  let cubeRoot = 1;
  const [answer, setAnswer] = useState();
  const isCubeOf = () => {
    for (let i = 2; i <= number; i++) {
      while (temp % i === 0) {
        temp = Math.floor(temp / i);
        numDivisible.push(i);
      }
    }
    console.log(numDivisible);
    let list = numDivisible.reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr] = acc[curr] + 1;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});
    for (let i of Object.entries(list)) {
      let num = Math.floor(i[1] / 3);
      cubeRoot *= i[0] ** num;
      setAnswer(cubeRoot);
    }
  };
  console.log("number", number, "cubeRoot", cubeRoot);
  if (cubeRoot * cubeRoot * cubeRoot === number) {
    console.log("hello");
  }
  console.log(cubeRoot);
  return (
    <div>
      <div>
        <input
          type="number"
          onChange={(e) => setNumber(e.target.value)}
        ></input>
        <button onClick={isCubeOf}>Enter</button>
      </div>
      <div>{answer}</div>
    </div>
  );
};

export default Parent2;
