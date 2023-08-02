import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <>
      <div className="spinner">
        <InfinitySpin />
      </div>
    </>
  );
};

export default Spinner;
