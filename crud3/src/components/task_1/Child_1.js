import React from "react";

function Child1({ data, setData }) {
  console.log("data :>> ", data);
  const handleClick = (e, key) => {
    switch (key) {
      case "addName":
        setData((prev) => ({
          ...prev,
          name: {
            ...prev.name,
            middle: "Pramod",
          },
        }));
        break;

      case "addTechnology":
        setData((prev) => ({
          ...prev,
          technical: {
            ...prev.technical,
            ...prev.technical.frontend.js.stack.push("html"),
          },
        }));

        // setData(data, data.technical.frontend.js.stack.push("html"));
        // console.log("dataupdated :>> ", data);
        break;

      case "companyName":
        setData((prev) => ({
          ...prev,
          company: [...prev.company, { name: "capegemini" }],
        }));

        // setData(data, data.company.push({ name: "capegemini" }));
        // console.log("dataupdated :>> ", data);
        break;

      default:
        break;
    }
  };

  // useEffect(() => {
  //   alert("data :>> ", data), [data];
  // });

  return (
    <>
      <div>
        <button onClick={(e) => handleClick(e, "addName")}>Name</button>
        <button onClick={(e) => handleClick(e, "addTechnology")}>
          Technical
        </button>
        <button onClick={(e) => handleClick(e, "companyName")}>Company</button>
        {/* <div>{data}</div> */}
      </div>
    </>
  );
}

export default Child1;
