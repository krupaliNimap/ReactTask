import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "../shared/styles/Styles.css";
import Spinner from "../shared/Spinner";
import Modal from "react-responsive-modal";
import ReactModal from "react-modal";

const Home = () => {
  console.log(" :>> ");
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
        console.log(err);
      });
  };

  useEffect(() => getAllUserList(), []);

  return (
    <>
      <div>
        <div className="div-add-user-button">
          <button onClick={handleModalOpen} className="add-user-button">
            Add
          </button>
        </div>
        <div className="home-container">
          <DataTable
            fixedHeader
            highlightOnHover
            responsive
            progressPending={spinnerState}
            progressComponent={<Spinner />}
            className="user-table"
            columns={columns}
            data={allData}
          />
        </div>
      </div>
      <div className="modal-container">
        {modalOpen && (
          <ReactModal
            isOpen={modalOpen}
            onRequestClose={handleModalClose}
          ></ReactModal>
        )}
      </div>
    </>
  );
};

export default Home;
