import React, { useState } from "react";

const Parent2 = () => {
  const [answer, setAnswer] = useState();
  const [number, setNumber] = useState();
  function isCubeOf() {
    let list = [];
    for (let i = 2; i <= number; i++) {
      list.push(i);
      if (i * i * i === number) {
        break;
      }
      if (i * i * i > number) {
        break;
      }
    }

    let num1 = list[list.length - 1] ** 3 - number;
    let num2 = number - list[list.length - 2] ** 3;
    setAnswer(num1 < num2 ? list[list.length - 1] : list[list.length - 2]);
  }
  // const [number, setNumber] = useState();
  // const numDivisible = [];
  // let temp = number;
  // let cubeRoot = 1;
  // const [answer, setAnswer] = useState();
  // // if (number == 1) {
  // //   setAnswer(1);
  // // }
  // const isCubeOf = (number) => {
  //   if (+number === 1) {
  //     setAnswer(1);
  //   }
  //   for (let i = 2; i <= number; i++) {
  //     while (temp % i === 0) {
  //       temp = Math.floor(temp / i);
  //       numDivisible.push(i);
  //     }
  //   }
  //   let list = numDivisible.reduce((acc, curr) => {
  //     if (acc[curr]) {
  //       acc[curr] = acc[curr] + 1;
  //     } else {
  //       acc[curr] = 1;
  //     }
  //     return acc;
  //   }, {});
  //   for (let i of Object.entries(list)) {
  //     let num = Math.floor(i[1] / 3);
  //     cubeRoot *= i[0] ** num;
  //     setAnswer(cubeRoot);
  //   }
  // };
  return (
    <div>
      <p>
        Description: Find the cube-root of the number. <br />
        If the number has no cube-root then output the nearest cuberoot of that
        number.
      </p>
      <input type="number" onChange={(e) => setNumber(e.target.value)}></input>
      <button onClick={isCubeOf}>Enter</button>
      <div>{answer}</div>
    </div>
  );
};

export default Parent2;
