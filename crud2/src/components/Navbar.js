import React from "react";
import "../styles/Navbar.css";
import { Link, Outlet } from "react-router-dom";
import "../styles/Navbar.css";
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
        <div className="navbar">
          <div className="image">
            <img
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/09/Microsoft_Forms_%282019-present%29.svg"
            />
          </div>
          <div className="sub-navbar">
            <Link className="sub-navbar1" to="/contact">
              Contact
            </Link>
            <Link className="sub-navbar1" to="/details">
              Details
            </Link>

            {/* {props?.component} */}
            {/* 
            <button className="button" onClick={handleOpen}>
              Modal
            </button> */}
          </div>
        </div>
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
