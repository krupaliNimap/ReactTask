import axios from "axios";
import React from "react";

const Test = () => {
  async function abc() {
    const promise1 = await axios.get("http://localhost:8000/user");
    console.log("promise1", promise1.data);
  }
  abc();
  // const promise = new Promise((res, rej) => {
  //   res(promise1);
  //   rej("");
  // });
  // console.log("promise", promise);
};

export default Test;
