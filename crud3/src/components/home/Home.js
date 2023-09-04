import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "../../shared/styles/Styles.css";
import "react-responsive-modal/styles.css";
import Spinner from "../../shared/Spinner";
import UserForm from "./UserForm";
import Pagination from "../../shared/Pagination";

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
    if (
      !allData.filter(
        (item) => (item.email === data.email) & (email !== item.email)
      ).length
    ) {
      axios
        .put(`http://localhost:8000/user/${id}`, data)
        .then((response) => {
          setAllData(response.data);
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
    axios
      .delete(`http://localhost:8000/user/${id}`)
      .then((response) => {
        getAllUserList();
      })
      .catch(() => alert("Something went wrong"));
  };

  //pagination
  const [currPage, setCurrPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const pageCount = Math.ceil(allData && allData?.length / perPage);
  const startIndex = perPage * currPage - perPage;
  const endIndex = perPage * currPage;
  const paginateData = allData.slice(startIndex, endIndex);
  console.log(
    "pageCount, perPage,  currPage, startIndex, endIndex, paginateData",
    pageCount,
    perPage,
    currPage,
    startIndex,
    endIndex,
    paginateData
  );

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
          // fixedHeaderScrollHeight="300px"
          highlightOnHover
          responsive
          progressPending={spinnerState}
          progressComponent={<Spinner />}
          columns={columns}
          data={paginateData}
        />
        <Pagination
          count={pageCount}
          perPage={perPage}
          setPerPage={setPerPage}
          currPage={currPage}
          setCurrPage={setCurrPage}
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
