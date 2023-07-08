import React from "react";
import "../../styles/Modal.css";
function Modal({ isModalOpen, handleClose }) {
  if (isModalOpen === true) {
    return (
      <>
        <section className="modal hidden">
          <div>
            <button className=" close-btn" onClick={handleClose}>
              X
            </button>
          </div>
          <label>
            <input type="text"></input>
          </label>
        </section>
      </>
    );
  }
}

export default Modal;
