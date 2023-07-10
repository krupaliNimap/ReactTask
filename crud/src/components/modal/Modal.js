import React, { useState } from "react";
import "../../styles/Modal.css";
function Modal({ isModalOpen, handleClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const addUser = (e) => {
    e.preventDefault();
    const addName = name.trim();
    console.log("addName :>> ", addName);
    const addEmail = email.trim();
    console.log("addEmail :>> ", addEmail);
    const addGender = gender.trim();
    console.log("addGender :>> ", addGender);
    const addStatus = status.trim();
    console.log("addStatus :>> ", addStatus);

    if (addName && addEmail && addGender && addStatus) {
      const payload = {
        name: addName,
        email: addEmail,
        gender: addGender,
        status: addStatus,
      };

      fetch("https://gorest.co.in/public/v2/users", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Authorization:
            "Bearer 18a3279201423034b60a718f43ea6592db5e934ef43e88e9ff8c3bfe40056a4c",
        },
      })
        .then((response) => response.json)
        .then((data) => {
          setName("");
          setEmail("");
          setGender("");
          setStatus("");
        });
    }
  };
  if (isModalOpen === true) {
    return (
      <div className="modal-bg">
        <section className="modal">
          <div>
            <button className="close-btn" onClick={handleClose}>
              <img
                height="30px"
                width="30px"
                src={require("../../assets/img1.png")}
                alt="close"
              ></img>
            </button>
          </div>
          <form onSubmit={addUser} className="details">
            <label className="sub-details">
              Name :
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="sub-details">
              Email Id :{" "}
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="sub-details">
              Gender :{" "}
              <input type="text" onChange={(e) => setGender(e.target.value)} />
            </label>
            <label className="sub-details">
              Status :{" "}
              <input type="text" onChange={(e) => setStatus(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Modal;
