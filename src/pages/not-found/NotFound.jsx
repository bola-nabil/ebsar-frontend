import React from "react";
import PageTitle from "components/ui/PageTitle";
import "./not-found.css";

const NotFound = () => {
  return (
    <div className="mobile-container edit-page not-found-page">
      <PageTitle title="404 - Page Not Found" />

      <div className="not-found center-col text-center">
        <h1 className="fw-bold text-danger">404</h1>
        <p className="fw-bold text-uppercase mt-2">
          Oops! Page Not Found
        </p>
      </div>
    </div>
  );
};

export default NotFound;
