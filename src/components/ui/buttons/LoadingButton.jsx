import React from "react";
import PageTitle from "../PageTitle";

const LoadingButton = () => {
  return (
    <div className="loading-button center-row">
      <PageTitle title="Loading" />
      <div className="loading-style rounded-circle"></div>
    </div>
  );
};

export default LoadingButton;
