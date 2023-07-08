import React, { useState } from "react";

const HookExample = () => {
  let todoList = ["Sleeping", "Brunch with Tv", "Afternoon Nap"];
  const [content, setContent] = useState("");
  const [list, setList] = useState(todoList);
  const handleChange = (e) => {
    setContent(e.target.value);
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    if (content) {
      setList([...list, content]);
      setContent("");
      e.preventDefault();
    }
  };
  return (
    <>
      <h3>Todo list printing</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={content} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <ol type="1">
        {list.map((item) => (
          <li>
            {item}
            <button
              onClick={() => {
                var index = list.indexOf(item);
                let filterList = list.filter((i) => {
                  if (list.indexOf(i) !== index) {
                    return i;
                  }
                });
                setList(filterList);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default HookExample;
