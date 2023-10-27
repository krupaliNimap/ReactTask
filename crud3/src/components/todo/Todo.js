import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoModal from "./TodoModal";
import moreIcon from "../../assets/images/more-vertical.svg";
import deleteIcon from "../../assets/images/DeleteLogo.png";

const Todo = () => {
  const [openTodoModal, setOpenTodoModal] = useState(false);
  const [allTodo, setAllTodo] = useState([]);
  const [newRef, setNewRef] = useState(0);
  const [count, setCount] = useState(1);
  const [todoMoreId, setTodoMoreId] = useState(null);

  const handleTodoModalOpen = (data) => {
    setCount(count + 1);
    setOpenTodoModal(true);
    axios
      .put(`http://localhost:8000/todo/${data.id}`, { ...data, status: true })
      .then(() => getAllTodo());
  };

  const handleTodoModalClose = (data) => {
    setOpenTodoModal(false);
    updateTodo({ ...data, status: false });
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

  const updateTodo = (data) => {
    axios
      .put(`http://localhost:8000/todo/${data.id}`, {
        ...data,
        name: data.name,
      })
      .then(() => getAllTodo())
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
  }, [newRef, count]);

  return (
    <div className="todo-container" onClick={() => setTodoMoreId(null)}>
      <div
        className="todo-subcontainer2 todo-subcontainer1"
        onClick={() => addToDo({ name: " ", status: true })}
      >
        +
      </div>
      {allTodo?.map((item) => (
        <div
          className="todo-subcontainer2"
          onClick={() => handleTodoModalOpen(item)}
        >
          <div className="todo-more-container">
            <img
              src={moreIcon}
              alt="more-icon"
              onClick={(e) => {
                e.stopPropagation();
                setTodoMoreId(item.id);
              }}
            />
            {todoMoreId === item?.id && (
              <div className="div-delete-update-button div-modal-delete-button">
                <img
                  src={deleteIcon}
                  alt="delete-icon"
                  className="delete-update-button"
                  onClick={(e) => {
                    deleteTodo(item?.id);
                    e.stopPropagation();
                  }}
                />
              </div>
            )}
          </div>
          <div>
            {item.name}
            {item.status ? (
              <TodoModal
                data={item}
                close={handleTodoModalClose}
                newRef={newRef}
                setNewRef={setNewRef}
                count={count}
                setCount={setCount}
                updateTodo={updateTodo}
              />
            ) : (
              ""
            )}
          </div>
          {/* <button
            onClick={(e) => {
              deleteTodo(item.id);
              e.stopPropagation();
            }}
          >
            -
          </button> */}
        </div>
      ))}
      {/* {allTodo?.map((item) => {
        todoMoreId === item?.id;
        return <div>{item.id}</div>;
      })} */}
    </div>
  );
};

export default Todo;
