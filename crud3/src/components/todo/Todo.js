import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoModal from "./TodoModal";

const Todo = () => {
  const [openTodoModal, setOpenTodoModal] = useState(false);
  const [allTodo, setAllTodo] = useState([]);
  const [newRef, setNewRef] = useState(0);
  const [count, setCount] = useState(1);

  const handleTodoModalOpen = (data) => {
    setCount(count + 1);
    console.log("count", count, newRef);
    setOpenTodoModal(true);
    axios
      .put(`http://localhost:8000/todo/${data.id}`, { ...data, status: true })
      .then(() => getAllTodo());
  };

  const handleTodoModalClose = (data) => {
    setOpenTodoModal(false);
    axios
      .put(`http://localhost:8000/todo/${data.id}`, { ...data, status: false })
      .then(() => getAllTodo());
  };

  const getAllTodo = () => {
    axios
      .get("http://localhost:8000/todo")
      .then((res) => setAllTodo(res.data))
      .catch((err) => alert(err));
  };

  const addToDo = (data) => {
    axios
      .post("http://localhost:8000/todo", data)
      .then((res) => getAllTodo())
      .catch((err) => alert(err));
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:8000/todo/${id}`)
      .then(() => getAllTodo())
      .catch((err) => alert(err));
  };

  useEffect(() => getAllTodo(), []);
  useEffect(() => {
    if (newRef && newRef.current) {
      newRef.current.style.zIndex = count + 1;
    }
  }, [newRef]);

  return (
    <div>
      {allTodo?.map((item) => (
        <p className="todo-container">
          <div
            className="todo-subcontainer"
            onClick={() => handleTodoModalOpen(item)}
          >
            {item.name}
            {item.status ? (
              <TodoModal
                data={item}
                close={handleTodoModalClose}
                newRef={newRef}
                setNewRef={setNewRef}
                count={count}
                setCount={setCount}
              />
            ) : (
              ""
            )}
          </div>
          <button
            onClick={(e) => {
              deleteTodo(item.id);
              e.stopPropagation();
            }}
          >
            -
          </button>
        </p>
      ))}
      <button
        onClick={(e) => {
          addToDo({ name: " " });
          e.stopPropagation();
        }}
      >
        +
      </button>
    </div>
  );
};

export default Todo;
