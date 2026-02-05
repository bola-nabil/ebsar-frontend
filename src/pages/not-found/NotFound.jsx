import React from "react";
import PageTitle from "../../components/ui/PageTitle";
import "./not-found.css";

const NotFound = () => {
  return (
    <div className="edit-page mobile-container">
      <PageTitle title="Not Found" />

      <div className="not-found center-row">
        <p className="fw-bold text-danger text-uppercase">Not Found Page 404</p>
      </div>
    </div>
  );
};

export default NotFound;
