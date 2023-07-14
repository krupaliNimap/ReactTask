import React from "react";
import "../styles/Modal.css";

function Modal({
  handleClose,
  addUser,
  setUser,
  user,
  setEdit,
  edit,
  editUser,
}) {
  const handleChange = (e, key) => {
    console.log(e.target.value, key);
    setUser({ ...user, [key]: e.target.value });
  };

  return (
    <div className="modal">
      <div>
        <button className="close-btn" onClick={handleClose}>
          <img src={require("../assets/img1.png")} height="25px" alt="close" />
        </button>
      </div>
      <form onSubmit={edit ? editUser : addUser} className="details">
        <label className="sub-details">
          Name :
          <input
            required
            value={user.name}
            onChange={(e) => handleChange(e, "name")}
          ></input>
        </label>
        <label className="sub-details">
          Email :
          <input
            required
            value={user.email}
            onChange={(e) => handleChange(e, "email")}
          ></input>
        </label>
        <label className="sub-details">
          Gender :
          <input
            type="radio"
            value="Male"
            name="gender"
            onChange={(e) => handleChange(e, "gender")}
          />
          Male
          <input
            type="radio"
            value="Female"
            name="gender"
            onChange={(e) => handleChange(e, "gender")}
          />
          Female
        </label>
        <label className="sub-details">
          Status :
          <input
            type="radio"
            value="Active"
            name="status"
            onChange={(e) => handleChange(e, "status")}
          />
          Active
          <input
            type="radio"
            value="Inactive"
            name="status"
            onChange={(e) => handleChange(e, "status")}
          />
          Inactive
        </label>
        <button type="submit">{edit ? "Edit" : "Add"}</button>
      </form>
    </div>
  );
}

export default Modal;
