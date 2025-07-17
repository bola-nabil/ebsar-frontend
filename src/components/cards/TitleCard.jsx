import React from "react";
import { Link } from "react-router-dom";

const TitleCard = ({ title, pathCard, titleCard }) => {
  return (
    <div className="title-card w-100">
      <h2>{title}</h2>
      <div className="card-btn rounded-3">
        <Link
          to={pathCard}
          className="fw-medium text-white text-decoration-none"
        >
          {titleCard}
        </Link>
      </div>
    </div>
  );
};

export default TitleCard;
