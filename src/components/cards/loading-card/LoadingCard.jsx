import React from "react";
import "./loading-card.css";

const LoadingCard = () => (
  <div className="loading-card d-flex justify-content-center align-items-center vh-100">
      <div className="loading-content text-white center-col rounded-3">
        <div className="loading-style rounded-circle"></div>
        <h4>Loading...</h4>
      </div>
  </div>
);

export default LoadingCard;