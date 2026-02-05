import React from "react";
import PageTitle from "../PageTitle";
import "./loading.css";

const Loading = ({ showTitle = true }) => {
  return (
    <div className="loading center-col text-white">
      {showTitle && <PageTitle title="Loading" />}
      <div className="loading-chart rounded-circle"></div>
      <h4>Loading....</h4>
    </div>
  );
};

export default Loading;
