import React, { useEffect, useState } from "react";
import "../styles/Home.css";

function Home({ fetchUser, allUsers, openEdit, deleteUser }) {
  useEffect(() => fetchUser(), []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.gender}</td>
              <td>{data.status}</td>
              <td>
                <button
                  className="update-btn"
                  onClick={(e) => openEdit(e, data)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={(e) => deleteUser(e, data)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
