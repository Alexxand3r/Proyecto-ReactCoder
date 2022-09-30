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

      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  );
};

export default Spinner;
