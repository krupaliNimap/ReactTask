import React, { useEffect, useState } from "react";
import "../../styles/Modal.css";
function Modal({ isModalOpen, handleClose, data }) {
  const [name, setName] = useState(data ? data.name : "");
  const [email, setEmail] = useState(data ? data.email : "");
  const [gender, setGender] = useState(data ? data.gender : "");
  const [status, setStatus] = useState(data ? data.status : "");

  console.log("data :>> ", data, name, email, gender);
  const addUser = (e) => {
    e.preventDefault();
    const addName = name.trim();
    const addEmail = email.trim();
    const addGender = gender.trim();
    const addStatus = status.trim();

    if (addName && addEmail && addGender && addStatus) {
      const payload = {
        name: addName,
        email: addEmail,
        gender: addGender,
        status: addStatus,
      };
      console.log("payload :>> ", payload);

      fetch("http://localhost:8000/user", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          // Authorization:
          //   "Bearer 18a3279201423034b60a718f43ea6592db5e934ef43e88e9ff8c3bfe40056a4c",
        },
      })
        .then((response) => response.json)
        .then((data) => {
          setName("");
          setEmail("");
          setGender("");
          setStatus("");
          handleClose();
        });
    }
  };

  useEffect(() => {
    setName(data?.name);
    setEmail(data?.email);
    setGender(data?.gender);
    setStatus(data?.status);
  }, [data]);

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
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="sub-details">
              Email Id :
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="sub-details">
              Gender :
              <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </label>
            <label className="sub-details">
              Status :
              <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Modal;
