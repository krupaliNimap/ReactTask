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
        break;

      case "companyName":
        setData((prev) => ({
          ...prev,
          company: [...prev.company, { name: "capegemini" }],
        }));
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div>
        <p>
          (Open console to get the output of this task.)
          <div>
            Description:{" "}
            <li>
              If "Name" is clicked, output returns the data object with added
              middle name in the name key.
            </li>
            <li>
              If "Technial" is clicked, output returns the data object with
              added stack in js in frontend in the technical key.
            </li>
            <li>
              If "company" is clicked, output returns the data object with added
              object in the company key.
            </li>
          </div>
        </p>
        <button onClick={(e) => handleClick(e, "addName")}>Name</button>
        <button onClick={(e) => handleClick(e, "addTechnology")}>
          Technical
        </button>
        <button onClick={(e) => handleClick(e, "companyName")}>Company</button>
      </div>
    </>
  );
}

export default Child1;
