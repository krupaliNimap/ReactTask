import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "../../shared/styles/Styles.css";
import "react-responsive-modal/styles.css";
import Spinner from "../../shared/Spinner";
import UserForm from "./UserForm";
import Pagination from "../../shared/Pagination";
import { Tooltip } from "@mui/material";
import PieChart from "./PieChart";

const Home = () => {
  const [allData, setAllData] = useState([]);
  const [spinnerState, setSpinnerState] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState();
  const [addState, setAddState] = useState(true);
  const [delState, setDelState] = useState(false);
  const handleModalOpen = (data) => {
    if (data) {
      setAddState(false);
    }
    if (+data) {
      setDelState(true);
    }
    setSelectedData(data);
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setAddState(true);
    setDelState(false);
    setModalOpen(false);
  };
  const columns = [
    {
      name: "ID",
      selector: (row) => row?.id,
    },
    {
      name: "NAME",
      selector: (row) => row?.name,
    },
    {
      name: "EMAIL",
      selector: (row) => (
        <Tooltip title={<div className="tooltip">{row?.email}</div>}>
          <span>{row?.email}</span>
        </Tooltip>
      ),
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
      name: "ACTION",
      selector: "null",
      cell: (row) => [
        <img
          alt="Update"
          onClick={() => handleModalOpen(row.id)}
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
    if (!allData.filter((item) => item.email === data.email).length) {
      axios
        .post("http://localhost:8000/user", data)
        .then((response) => {
          // setAllData(response.data);
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
    if (
      !allData.filter(
        (item) => (item.email === data.email) & (email !== item.email)
      ).length
    ) {
      axios
        .put(`http://localhost:8000/user/${id}`, data)
        .then((response) => {
          getAllUserList();
        })
        .catch((err) => alert(err));
    } else {
      alert("Email already exist");
    }
    setModalOpen(false);
    setSelectedData();
  };

  const deleteUser = (id) => {
    setDelState(true);
    handleModalOpen(true);
    axios
      .delete(`http://localhost:8000/user/${id}`)
      .then((response) => {
        getAllUserList();
      })
      .catch(() => alert("Something went wrong"));
    setModalOpen(false);
  };

  //pagination
  const [currPage, setCurrPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const pageCount = Math.ceil(allData && allData?.length / perPage);
  const startIndex = perPage * currPage - perPage;
  const endIndex = perPage * currPage;
  const paginateData = allData?.slice(startIndex, endIndex);

  useEffect(() => getAllUserList(), []);

  return (
    <>
      <div className="div-add-user-button">
        <button onClick={() => handleModalOpen()} className="add-user-button">
          Add
        </button>
      </div>
      <div className="table-container">
        <DataTable
          fixedHeader
          // fixedHeaderScrollHeight="300px"
          highlightOnHover
          responsive
          progressPending={spinnerState}
          progressComponent={<Spinner />}
          columns={columns}
          data={paginateData}
          onRowClicked={(details) => {
            console.log("e", details);
          }}
        />
        {allData?.length ? (
          <Pagination
            count={pageCount}
            perPage={perPage}
            setPerPage={setPerPage}
            currPage={currPage}
            setCurrPage={setCurrPage}
            startIndex={startIndex}
            endIndex={endIndex}
            data={allData}
          />
        ) : (
          ""
        )}
        <PieChart data={allData} />
      </div>
      {modalOpen && (
        <UserForm
          modalOpen={modalOpen}
          handleModalClose={handleModalClose}
          setAllData={setAllData}
          addUser={addUser}
          updateUser={updateUser}
          deleteUser={deleteUser}
          selectedData={selectedData}
          addState={addState}
          delState={delState}
        />
      )}
    </>
  );
};

export default Home;
