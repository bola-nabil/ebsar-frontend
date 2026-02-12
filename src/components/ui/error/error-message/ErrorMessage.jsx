import React from "react";
import "./error-message.css";

const ErrorMessage = ({ message }) => {
  return (
    <>
     {
      message && (
         <div className="error-message center-col">
            <p className="fw-bold fs-4 text-danger text-center text-uppercase">{message}</p>
        </div>
      )
     }
    </>
  );
};

export default ErrorMessage;
