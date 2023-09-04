import React from "react";

const Parent4 = () => {
  const n = 20;
  const arr = [3, 6, 7, 8, 14, 19];
  for (let i = 0; i < arr.length; i++) {
    let a,
      b = 0;
    if (arr[i] < n / 2) {
      a = arr[i];
      b = arr[i + 1];
    } else break;
    console.log("a,b,max", a, n - b + 1, Math.max(a, n - b + 1));
  }
  return <div></div>;
};

export default Parent4;
