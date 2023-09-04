import React from "react";

const Pagination = ({ count, perPage, setPerPage, setCurrPage, currPage }) => {
  const prevPage = (e) => {
    setCurrPage(currPage - 1);
  };
  const nextPage = (e) => {
    setCurrPage(currPage + 1);
  };
  return (
    <>
      <select
        onChange={(e) => {
          console.log("e", e);
          setPerPage(e.target.value);
          setCurrPage(1);
        }}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      {count !== 1 && (
        <>
          <input
            type="button"
            value={"<"}
            onClick={prevPage}
            disabled={currPage === 1}
          />
          <input
            type="button"
            value="1"
            disabled={currPage === 1}
            onClick={() => setCurrPage(1)}
          />
          {currPage - 2 !== 1 && currPage > 2 && "..."}
          {currPage - 1 !== 1 && currPage > 1 && (
            <input
              type="button"
              value={currPage - 1}
              onClick={() => setCurrPage(currPage - 1)}
            />
          )}
          {currPage !== 1 && currPage !== count && (
            <input type="button" value={currPage} disabled="true" />
          )}
          {currPage + 1 !== count && currPage < count && (
            <input
              type="button"
              value={currPage + 1}
              onClick={() => setCurrPage(currPage + 1)}
            />
          )}
          {currPage + 2 !== count && currPage < count - 1 && "..."}
          <input
            type="button"
            value={count}
            disabled={currPage === count}
            onClick={() => setCurrPage(count)}
          />
          <input
            type="button"
            value={">"}
            onClick={nextPage}
            disabled={currPage === count}
          />
        </>
      )}
    </>
  );
};

export default Pagination;
