import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/ui/PageTitle";

const ServerFailed = () => {
  return (
    <div className="server-failed center-col">
      <PageTitle title="Server Failed" />
      <h1>Server Failed &#9785;</h1>
      <Link to="/" className="text-white">
        Login Page
      </Link>
    </div>
  );
};

export default ServerFailed;
