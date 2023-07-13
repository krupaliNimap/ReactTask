import React from "react";
import "../styles/Navbar.css";
import { Link, Outlet } from "react-router-dom";
import useShare from "../shared/Shared";
import Modal from "./Modal";
import Home from "./Home";

function Navbar() {
  const {
    isModalOpen,
    handleOpen,
    handleClose,
    addUser,
    setUser,
    user,
    fetchUser,
    allUsers,
    editUser,
    openEdit,
    deleteUser,
    edit,
  } = useShare();
  return (
    <div>
      <div>
        <button onClick={handleOpen}>Modal</button>
        <Home
          fetchUser={fetchUser}
          allUsers={allUsers}
          openEdit={openEdit}
          deleteUser={deleteUser}
        />
        {isModalOpen && (
          <Modal
            handleClose={handleClose}
            addUser={addUser}
            setUser={setUser}
            user={user}
            edit={edit}
            editUser={editUser}
          />
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
