import React, { useEffect, useRef, useState } from "react";

const TodoModal = ({ data, close, newRef, setNewRef, count, setCount }) => {
  const ref = useRef(null);

  const dragElement = (ref) => {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    onmousedown = dragMouse;

    function dragMouse(e) {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      onmouseup = closeDragElement;
      onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      if (newRef && newRef.current) {
        newRef.current.style.top = newRef?.current?.offsetTop - pos2 + "px";
        newRef.current.style.left = newRef?.current?.offsetLeft - pos1 + "px";
      }
    }

    function closeDragElement() {
      onmouseup = null;
      onmousemove = null;
    }
  };
  dragElement(ref);
  useEffect(() => {
    if (newRef && newRef.current) {
      newRef.current.style.zIndex = count + 1;
    }
  }, [newRef]);
  return (
    <>
      <div
        ref={ref}
        className="todo-modal-container"
        onClick={(e) => {
          setNewRef(ref);
          e.stopPropagation();
          setCount(count + 1);
        }}
      >
        <div>
          <button
            className="todo-modal-cross-button"
            onClick={(e) => {
              close(data);
              e.stopPropagation();
            }}
          >
            X
          </button>
        </div>
        {data.name}
        {data.id}
      </div>
    </>
  );
};

export default TodoModal;
