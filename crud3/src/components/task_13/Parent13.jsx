import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  getAllUser,
  transferSelectedTasks,
} from "../redux/reduxSlice/selectTransferTaskSlice";
import styles from "./selectTask.module.scss";
import { addSelectTaskUser } from "./../redux/reduxSlice/selectTransferTaskSlice";
import { MenuItem, Select } from "@mui/material";

const Parent13 = () => {
  const dispatch = useDispatch();
  const { allUser } = useSelector((state) => state.selectTaskSlice);
  const [open, setOpen] = useState(false);
  const [addUser, setAddUser] = useState(false);
  const [newInput, setNewInput] = useState();
  const [checked, setChecked] = useState();
  const [secondUser, setSecondUser] = useState();
  const [user, setUser] = useState({});
  const [checkedUser, setCheckedUser] = useState({
    userId: null,
    checkedTaskId: [],
    checkedTask: [],
  });
  const taskTransfer = () => {
    const appendTask = allUser?.[checkedUser?.userId - 1]?.task?.reduce(
      (acc, item, index) => {
        if (checkedUser?.checkedTaskId?.includes(index)) {
          acc.push(item);
        }
        return acc;
      },
      []
    );
    checkedUser?.checkedTaskId.sort();
    const deleteTask = allUser?.[checkedUser?.userId - 1]?.task?.reduce(
      (acc, item, index) => {
        if (!checkedUser?.checkedTaskId?.includes(index)) {
          acc.push(item);
        }
        return acc;
      },
      []
    );
    // const tempTo = {
    //   ...allUser,
    //   [checkedUser?.userId-1]: {
    //     ...allUser?.[checkedUser?.userId-1],
    //     task: deleteTask,
    //   },
    //   [secondUser-1]:{
    //     ...allUser?.[secondUser-1],
    //     task: [...allUser?.[secondUser-1].task, ...appendTask]
    //   }
    // };
    const tempTo = {
      ...allUser?.[secondUser - 1],
      task: [...allUser?.[secondUser - 1].task, ...appendTask],
    };
    const tempFrom = {
      ...allUser?.[checkedUser?.userId - 1],
      task: deleteTask,
    };
    console.log('tempTo,tempFrom,secondUser,checkedUser.userId', tempTo,tempFrom,secondUser,checkedUser.userId)
    // console.log('tempTo,tempFrom', tempTo,tempFrom,allUser?.[secondUser-1].id,allUser?.[checkedUser?.userId - 1].id)
    dispatch(transferSelectedTasks({data:tempTo,id:secondUser}))
    dispatch(transferSelectedTasks({data:tempFrom,id:checkedUser.userId}));
  };
  const addTaskFun = () => {
    const temp = {
      ...user,
      task: [...user.task, newInput],
    };
    setUser(temp);
    dispatch(addTask({ data: temp, id: temp.id }));
  };

  function taskChecked(e, userId, taskId, task) {
    if (e.target.checked === true) {
      setCheckedUser({
        ...checkedUser,
        userId,
        checkedTaskId: [...checkedUser.checkedTaskId, taskId],
        checkedTask: [...checkedUser.checkedTask, task],
      });
    } else {
      // arr.filter(item => item !== value)
      checkedUser.checkedTaskId = checkedUser.checkedTaskId.filter(
        (item) => item !== taskId
      );
      // checkedUser.checkedTask.delete(task)
      checkedUser.checkedTask = checkedUser.checkedTask.filter(
        (item) => item !== task
      );
      checkedUser.checkedTaskId.length === 0
        ? setCheckedUser({
            ...checkedUser,
            userId: null,
            checkedTaskId: checkedUser.checkedTaskId,
            checkedTask: checkedUser.checkedTask,
          })
        : setCheckedUser({
            ...checkedUser,
            userId,
            checkedTaskId: checkedUser.checkedTaskId,
            checkedTask: checkedUser.checkedTask,
          });
    }
    setChecked({
      ...checked,
      [userId]: {
        ...checked[userId],
        [taskId]: e.target.checked,
      },
    });
  }
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  useEffect(() => {
    let checkedObject = allUser?.reduce((acc, item) => {
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
                  disabled={
                    checkedUser?.userId
                      ? checkedUser?.userId === item.id
                        ? false
                        : true
                      : false
                  }
                  onChange={(e) => taskChecked(e, item.id, index, item2)}
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
      <Select onChange={(e) => setSecondUser(e.target.value)}>
        <MenuItem>Select User</MenuItem>
        {allUser?.length
          ? allUser?.map((user) => (
              <MenuItem value={user?.id}>{user?.name}</MenuItem>
            ))
          : ""}
      </Select>
      <button onClick={taskTransfer}>Transfer</button>
    </div>
  );
};

export default Parent13;
