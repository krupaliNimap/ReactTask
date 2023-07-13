import React, { useState } from "react";

function useShare() {
  const initial = {
    name: "",
    email: "",
    gender: "",
    status: "",
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState(initial);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setUser(initial);
  };

  const fetchUser = () => {
    fetch("http://localhost:8000/users")
      .then((response) => response.json())
      .then((data) => setAllUsers(data));
  };

  const addUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        fetchUser();
        console.log("abc");
        handleClose();
      });
  };

  const openEdit = (e, data) => {
    e.preventDefault();
    handleOpen();
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      gender: data.gender,
      status: data.status,
    });
    setEdit(true);
  };

  const editUser = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then(() => {
        fetchUser();
        handleClose();
      });
  };

  const deleteUser = (e, data) => {
    fetch(`http://localhost:8000/users/${data.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        fetchUser();
      });
  };

  return {
    isModalOpen,
    handleOpen,
    handleClose,
    fetchUser,
    allUsers,
    setUser,
    user,
    addUser,
    edit,
    editUser,
    openEdit,
    deleteUser,
  };
}
export default useShare;
