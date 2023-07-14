import React, { useState } from "react";
import "../../styles/Home.css";
import Modal from "../modal/Modal";
import { json, useOutletContext } from "react-router-dom";

function Home(props) {
  const [updateData, setUpdateData] = useState();
  const [isModalOpen, handleClose, handleOpen] = useOutletContext();
  console.log("handleClose :>> ", handleClose);
  const updateUser = (data) => {
    setUpdateData(data);
    fetch("http://localhost:8000/user", {
      method: "PUT",
    });
  };
  console.log("updateData :>> ", updateData);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>E-Mail</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.user.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.gender}</td>
              <td>{data.status}</td>
              <td>
                <button onClick={() => updateUser(data)} className="update-btn">
                  Update
                </button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {/* {updateData ? (
          <Modal
            isModalOpen={true}
            data={updateData}
            setUpdateData={setUpdateData}
            handleClose={handleClose}
          />
        ) : (
          <Modal isModalOpen={false} />
        )} */}

        <Modal
          isModalOpen={isModalOpen}
          handleOpen={handleOpen}
          data={updateData}
          setUpdateData={setUpdateData}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
}
export default Home;
