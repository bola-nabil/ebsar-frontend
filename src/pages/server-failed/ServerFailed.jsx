import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "components/ui/PageTitle";
import "./server-failed.css";

const ServerFailed = () => {
  return (
    <main className="server-failed center-col">
      <PageTitle title="Server Failed Page" />

      <h1 className="fw-bold text-danger mb-3">Server Error &#9785;</h1>
      <p className="mb-3">
        Something went wrong on our end. Please try again later.
      </p>

      <Link
        to="/"
        className="text-white text-decoration-none rounded-4"
        aria-label="Go to login page"
      >
        Go to Login
      </Link>
    </main>
  );
};

export default ServerFailed;
