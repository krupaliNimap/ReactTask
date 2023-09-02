import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "../../shared/styles/Styles.css";
import "react-responsive-modal/styles.css";
import Spinner from "../../shared/Spinner";
import UserForm from "./UserForm";

const Home = () => {
  const [allData, setAllData] = useState([]);
  const [spinnerState, setSpinnerState] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState();
  const handleModalOpen = (data) => {
    setSelectedData(data);
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const columns = [
    {
      name: "NAME",
      selector: (row) => (
        <span onClick={() => console.log("nameClicked")}>{row?.name}</span>
      ),
    },
    {
      name: "EMAIL",
      selector: (row) => row?.email,
    },
    {
      name: "GENDER",
      selector: (row) => row?.gender,
    },
    {
      name: "STATUS",
      selector: (row) => row?.status,
    },
    {
      name: "Action",
      selector: "null",
      cell: (row) => [
        <img
          alt="Update"
          onClick={() => deleteUser(row.id)}
          className="delete-update-button"
          src={require("../../assets/images/DeleteLogo.png")}
        ></img>,
        <img
          alt="Delete"
          className="delete-update-button"
          src={require("../../assets/images/EditLogo.png")}
          onClick={() => handleModalOpen(row)}
        ></img>,
      ],
    },
  ];

  const getAllUserList = () => {
    setSpinnerState(true);
    axios
      .get("http://localhost:8000/user")
      .then((response) => {
        setAllData(response.data);
        setSpinnerState(false);
      })
      .catch((err) => {
        setSpinnerState(false);
      });
  };

  const addUser = (data) => {
    console.log(
      "alldata",
      allData.filter((item) => item.email === data.email)
    );
    if (!allData.filter((item) => item.email === data.email).length) {
      axios
        .post("http://localhost:8000/user", data)
        .then((response) => {
          setAllData(response.data);
          getAllUserList();
        })
        .catch((err) => {
          alert(err);
        });
      setModalOpen(false);
    } else {
      alert("Email already exist");
    }
  };

  const updateUser = (id, email, data) => {
    // console.log("id", id, "email", email, "data", data);
    if (
      !allData.filter(
        (item) => (item.email === data.email) & (email !== item.email)
      ).length
    ) {
      axios
        .put(`http://localhost:8000/user/${id}`, data)
        .then((response) => {
          setAllData(response.data);
          console.log("update response", response);
          getAllUserList();
        })
        .catch((err) => alert(err));
    } else {
      alert("Email already exist");
    }
    // axios
    //   .put(`http://localhost:8000/user/${id}`, data)
    //   .then((response) => {
    //     setAllData(response.data);
    //     console.log("update response", response);
    //     getAllUserList();
    //   })
    //   .catch((err) => alert(err));
    setModalOpen(false);
    setSelectedData();
  };

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:8000/user/${id}`)
      .then((response) => {
        console.log("update response", response);
        getAllUserList();
      })
      .catch(() => alert("Something went wrong"));
  };

  useEffect(() => getAllUserList(), []);

  return (
    <>
      <div className="div-add-user-button">
        <button onClick={handleModalOpen} className="add-user-button">
          Add
        </button>
      </div>
      <div className="home-container">
        <DataTable
          fixedHeader
          fixedHeaderScrollHeight="300px"
          highlightOnHover
          responsive
          progressPending={spinnerState}
          progressComponent={<Spinner />}
          columns={columns}
          pagination="true"
          data={allData}
          onRowClicked={() => console.log("RowClicked")}
        />
      </div>
      {modalOpen && (
        <UserForm
          modalOpen={modalOpen}
          handleModalClose={handleModalClose}
          setAllData={setAllData}
          addUser={addUser}
          updateUser={updateUser}
          selectedData={selectedData}
        />
      )}
    </>
  );
};

export default Home;
