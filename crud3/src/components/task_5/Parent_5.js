import React from "react";
import { useState } from "react";

const Parent5 = () => {
  const [num, setNum] = useState();
  let arr = [32, 9, 76, 87, 3, 91, 79, 23, 9, 91, 1, 31];
  let arr1 = arr;
  console.log("arr", arr);
  let largest = (num) => {
    let max = 0;
    for (let j = 1; j <= num; j++) {
      console.log("j", j);
      max = 0;
      for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) max = arr[i];
      }
      arr = arr.filter((element) => element !== max);
      console.log("max", max);
    }
    return max;
  };
  const max = largest(num);
  //   for (let i = 0; i <= arr.length - 1; i++) {
  //     if (arr[i] > max) {
  //       thirdMax = secMax;
  //       secMax = max;
  //       max = arr[i];
  //     }
  //     if (arr[i] > secMax && max != arr[i]) {
  //       thirdMax = secMax;
  //       secMax = arr[i];
  //     }
  //     if (arr[i] > thirdMax && secMax != arr[i]) {
  //       thirdMax = arr[i];
  //     }
  //   }
  //   console.log("arr, max, secMax, thirdMax", arr, max, secMax, thirdMax);
  return (
    <div>
      <input onChange={(e) => setNum(e.target.value)}></input>
      <div>{arr1.map((item, index) => item + " ")}</div>
      <div>{max}</div>
    </div>
  );
};

export default Parent5;
