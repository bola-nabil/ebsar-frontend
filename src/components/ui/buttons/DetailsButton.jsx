import React from "react";

const DetailsButton = ({ onClick }) => {
  return (
    <div className="card-details">
      <button onClick={onClick} className="fw-medium fs-6 rounded-3">
        See More
      </button>
    </div>
  );
};

export default DetailsButton;
