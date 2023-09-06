import React from "react";

const Pagination = ({
  count,
  perPage,
  setPerPage,
  setCurrPage,
  currPage,
  startIndex,
  endIndex,
  data,
}) => {
  const prevPage = (e) => {
    setCurrPage(currPage - 1);
  };
  const nextPage = (e) => {
    setCurrPage(currPage + 1);
  };
  return (
    <div className="pagination-container">
      <select
        onChange={(e) => {
          setPerPage(e.target.value);
          setCurrPage(1);
        }}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <div className="user-numbers">
        {startIndex + 1} - {endIndex} / {data.length}
      </div>
      {count !== 1 && (
        <div>
          <input
            type="button"
            value={"<"}
            onClick={prevPage}
            disabled={currPage === 1}
            className="for-back-button pagination-button"
          />
          <input
            type="button"
            value="1"
            onClick={() => setCurrPage(1)}
            disabled={currPage === 1}
            className={`pagination-button ${
              currPage === 1 ? "current-page-highlight" : ""
            }`}
          />
          {currPage - 2 !== 1 && currPage > 2 && "..."}
          {currPage - 1 !== 1 && currPage > 1 && (
            <input
              type="button"
              value={currPage - 1}
              onClick={() => setCurrPage(currPage - 1)}
              className="pagination-button"
            />
          )}
          {currPage !== 1 && currPage !== count && (
            <input
              type="button"
              value={currPage}
              disabled="true"
              className={`pagination-button ${
                currPage !== 1 && currPage !== count
                  ? "current-page-highlight"
                  : ""
              }`}
            />
          )}
          {currPage + 1 !== count && currPage < count && (
            <input
              type="button"
              value={currPage + 1}
              onClick={() => setCurrPage(currPage + 1)}
              className="pagination-button"
            />
          )}
          {currPage + 2 !== count && currPage < count - 1 && "..."}
          <input
            type="button"
            value={count}
            onClick={() => setCurrPage(count)}
            disabled={currPage === count}
            className={`pagination-button ${
              currPage === count ? "current-page-highlight" : ""
            }`}
          />
          <input
            type="button"
            value={">"}
            onClick={nextPage}
            disabled={currPage === count}
            className="for-back-button pagination-button"
          />
        </div>
      )}
    </div>
  );
};

export default Pagination;
