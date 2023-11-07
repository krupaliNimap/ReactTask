import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  getAllSelectTask,
} from "../redux/reduxSlice/selectTransferTaskSlice";
import styles from "./selectTask.module.scss";

const Parent13 = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();
  const [newTask, setNewTask] = useState();
  const { allSelectTask } = useSelector((state) => state.selectTaskSlice);
  console.log("allSelectTask", allSelectTask);
  useEffect(() => {
    dispatch(getAllSelectTask());
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 104px)",
      }}
    >
      <div className={styles.gridContainer}>
        <div className={styles.item1}>
          {allSelectTask[0]?.["user1"].map((item, index) => (
            <label key={index}>
              <input type="checkbox" />
              {item}
            </label>
          ))}
          <div
            role="button"
            onClick={() => {
              setOpen(true);
              setUser("user1");
            }}
            className={styles.addButton}
          >
            Add
          </div>
        </div>
        <div className={styles.item2}>2</div>
      </div>
      {open && (
        <div className={styles.addUpdateModal}>
          <button onClick={() => setOpen(false)}>X</button>
          <input onChange={(e)=>{setNewTask(e.target.value)}}/>
          <button onClick={() => dispatch(addTask(newTask, user))}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Parent13;
