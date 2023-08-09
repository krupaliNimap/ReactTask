import React, { useState } from "react";
import Child1 from "./Child_1";

const Parent1 = () => {
  const [data, setData] = useState({
    name: {
      first: "Krupali",
      last: "Atkari",
    },
    technical: {
      frontend: {
        js: {
          stack: ["react"],
        },
      },
      backend: {
        js: {
          stack: ["node"],
        },
        python: {
          stack: ["Django"],
        },
      },
    },
    company: [{ name: "nimap" }],
  });
  return (
    <div>
      <Child1 data={data} setData={setData} />
    </div>
  );
};

export default Parent1;
