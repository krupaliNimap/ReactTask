import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "../../shared/styles/Styles.css";
import "react-responsive-modal/styles.css";
import Spinner from "../../shared/Spinner";
import Modal from "react-responsive-modal";
import UserForm from "./UserForm";

const Home = () => {
  const [allData, setAllData] = useState([]);
  const [spinnerState, setSpinnerState] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const columns = [
    {
      name: "NAME",
      selector: (row) => row?.name,
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
          // className="user-table"
          columns={columns}
          data={allData}
          className="Hello"
        />
      </div>
      {modalOpen && (
        <UserForm modalOpen={modalOpen} handleModalClose={handleModalClose} />
      )}
    </>
  );
};

export default Home;
