import React from "react";
import PageTitle from "../../PageTitle";
import "./loading-button.css";

const LoadingButton = () => {
  return (
    <div className="loading-btn center-row">
      <PageTitle title="Loading" />
      <div className="loading-style rounded-circle"></div>
    </div>
  );
};

export default LoadingButton;
