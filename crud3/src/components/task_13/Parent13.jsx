import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  getAllUser,
} from "../redux/reduxSlice/selectTransferTaskSlice";
import styles from "./selectTask.module.scss";
import { addSelectTaskUser } from "./../redux/reduxSlice/selectTransferTaskSlice";

const Parent13 = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [addUser, setAddUser] = useState(false);
  const [newInput, setNewInput] = useState();
  const [checked, setChecked] = useState();
  const [user, setUser] = useState({});
  const { allUser } = useSelector((state) => state.selectTaskSlice);
  const addTaskFun = () => {
    const temp = {
      ...user,
      task: [...user.task, newInput],
    };
    setUser(temp);
    dispatch(addTask({ data: temp, id: temp.id }));
  };


  function taskChecked(e, userId, taskId) {
    // const checkedId = document.getElementById("checked");
    // if (checkedId.checked) {
    //   setChecked(user);
    // }
    // console.log("checked", checked);
    setChecked({
      ...checked,
      [userId]: {
        ...checked[userId],
        [taskId]:e.target.checked
      }
    });
  }
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  useEffect(() => {
    let checkedObject = allUser.reduce((acc, item) => {
      return {
        ...acc,
        [item.id]: item.task.reduce((acc, item, index) => {
          return { ...acc, [index]: false };
        }, {}),
      };
    }, {});
    setChecked(checkedObject);
  }, [allUser]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 104px)",
      }}
    >
      <button
        onClick={() => {
          setOpen(true);
          setAddUser(true);
        }}
      >
        Add user
      </button>
      <div className={styles.gridContainer}>
        {allUser?.map((item) => (
          <div className={styles.item1} key={item?.id}>
            {item?.task?.map((item2, index) => (
              <label key={item2.id}>
                <input
                  value={checked?.[item.id]?.[index]}
                  type="checkbox"
                  id="checked"
                  onChange={(e) => taskChecked(e, item.id, index)}
                />
                {item2}
              </label>
            ))}
            <div
              role="button"
              onClick={() => {
                setOpen(true);
                setUser(item);
              }}
              className={styles.addButton}
            >
              Add
            </div>
          </div>
        ))}
      </div>
      {open && (
        <div className={styles.addUpdateModal}>
          <button onClick={() => setOpen(false)}>X</button>
          <input
            onChange={(e) => {
              setNewInput(e.target.value);
            }}
          />
          <button
            onClick={() =>
              addUser
                ? dispatch(addSelectTaskUser({ name: newInput, task: [] }))
                : addTaskFun()
            }
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Parent13;
