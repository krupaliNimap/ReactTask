import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "../../styles/Navbar.css";
import "../../styles/Modal.css";
import Modal from "../modal/Modal";
function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);
  function handleOpen() {
    setModalOpen(true);
  }
  function handleClose() {
    setModalOpen(false);
  }
  return (
    <>
      <div className="navbar">
        <div className="image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/09/Microsoft_Forms_%282019-present%29.svg"
            alt="logo"
          ></img>
        </div>
        <div>
          <div className="overlay hidden"></div>
          <button className="button" onClick={handleOpen}>
            Form
          </button>
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      <Outlet context={[isModalOpen, handleClose, handleOpen]} />
    </>
  );
}
export default Navbar;
