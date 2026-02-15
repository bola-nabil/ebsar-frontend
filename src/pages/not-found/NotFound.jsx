import React from "react";
import PageTitle from "components/ui/PageTitle";
import "./not-found.css";

const NotFound = () => {
  return (
    <main className="not-found-page d-flex justify-content-center align-items-center text-center w-100 vh-100">
      <PageTitle title="404 - Page Not Found" />

      <div className="not-found center-col text-center">
        <h1 className="fw-bold text-danger">404</h1>
        <p className="fw-bold text-uppercase mt-2">Oops! Page Not Found</p>
      </div>
    </main>
  );
};

export default NotFound;
