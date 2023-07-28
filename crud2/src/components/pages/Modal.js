import React from "react";
import "../../styles/Modal.css";

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
    <div className="modal-bg">
      <div className="modal">
        <div className="sub-modal1">
          <button className="close-btn" onClick={handleClose}>
            {/* <img src={require("../assets/img1.png")} height="25px" alt="close" /> */}
            X
          </button>
        </div>
        <div className="sub-modal2">
          <form onSubmit={edit ? editUser : addUser} className="details">
            <label className="sub-details">
              Name
              <div>
                <input
                  className="input"
                  required
                  value={user.name}
                  onChange={(e) => handleChange(e, "name")}
                ></input>
              </div>
            </label>
            <label className="sub-details">
              Email
              <div>
                <input
                  className="input"
                  required
                  value={user.email}
                  onChange={(e) => handleChange(e, "email")}
                ></input>
              </div>
            </label>
            <label className="sub-details">
              Gender
              <div>
                <input
                  className="radio"
                  type="radio"
                  value="Male"
                  name="gender"
                  required={true}
                  onChange={(e) => handleChange(e, "gender")}
                />
                Male
                <input
                  required={true}
                  className="radio"
                  type="radio"
                  value="Female"
                  name="gender"
                  onChange={(e) => handleChange(e, "gender")}
                />
                Female
              </div>
            </label>
            <label className="sub-details ">
              Status
              <div>
                <input
                  required="true"
                  className="radio"
                  type="radio"
                  value="Active"
                  name="status"
                  onChange={(e) => handleChange(e, "status")}
                />
                Active
                <input
                  required="true"
                  className="radio"
                  type="radio"
                  value="Inactive"
                  name="status"
                  onChange={(e) => handleChange(e, "status")}
                />
                Inactive
              </div>
            </label>
            <button className="submit-btn" type="submit">
              {edit ? "Edit" : "Add"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
