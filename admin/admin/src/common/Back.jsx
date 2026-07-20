import React from "react";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <div className="col-auto">
      <Link className="back_btn" to={-1}>
        <i className="fas fa-arrow-left" />
      </Link>
    </div>
  );
};

export default Back;
