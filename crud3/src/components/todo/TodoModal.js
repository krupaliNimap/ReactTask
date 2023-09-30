import React, { useEffect, useRef, useState } from "react";

const TodoModal = ({
  data,
  close,
  newRef,
  setNewRef,
  count,
  setCount,
  updateTodo,
}) => {
  const ref = useRef(null);
  const [inputData, setInputData] = useState(data);
  const [isThrottled, setIsThrottled] = useState(false);

  const forzIndex = () => {
    if (newRef && newRef.current) {
      newRef.current.children[1].style.zIndex = count + 2;
    }
  };

  const handleDataChange = (e) => {
    setInputData((prev) => ({ ...prev, name: e.target.value }));
    if (!isThrottled) {
      setIsThrottled(true);
      setTimeout(() => {
        setIsThrottled(false);
        console.log("inputData", inputData);
        updateTodo({ ...inputData, name: e.target.value });
      }, 2000);
    }
  };

  const dragElement = (ref) => {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    onmousedown = dragMouse;

    function dragMouse(e) {
      // e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      onmouseup = closeDragElement;
      onmousemove = elementDrag;
    }

    function elementDrag(e) {
      // e.preventDefault();
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
  }, [newRef, count]);
  return (
    <div>
      <div
        ref={ref}
        className="todo-modal-container"
        onClick={(e) => {
          setNewRef(ref);
          e.stopPropagation();
          setCount(count + 1);
        }}
      >
        <div
          className="todo-modal-cross-button-div"
          onClick={() => setNewRef(ref)}
        >
          <div value={data.name} />
          <button
            className="todo-modal-cross-button"
            onClick={(e) => {
              close(inputData);
              e.stopPropagation();
            }}
          >
            X
          </button>
        </div>
        <textarea
          onClick={() => {
            setNewRef(ref);
            forzIndex();
          }}
          value={inputData.name}
          // onChange={(e) =>
          //   setInputData((prev) => ({ ...prev, name: e.target.value }))
          // }
          onChange={handleDataChange}
        />
      </div>
    </div>
  );
};

export default TodoModal;
