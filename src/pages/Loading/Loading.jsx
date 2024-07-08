import React from "react";
import "./Loading.scss";

function Loading() {
  return (
    <div className="Loading">
      <div className="logo-container">
        <img className="a" src="/assets/A.png" alt="Logo" />
        <img className="d" src="/assets/d.png" alt="Logo" />
        <img className="k" src="/assets/K.png" alt="Logo" />
      </div>
    </div>
  );
}

export default Loading;
