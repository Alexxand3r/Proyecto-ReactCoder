import React from "react";
import "./styles.css";
const Spinner = () => {
  return (
    <div className="spinner">
      <img
        className="rounded-pill"
        src="../../assets/logovenum2.jpg"
        alt="venum"
        width={130}
      />

      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
};

export default Spinner;
