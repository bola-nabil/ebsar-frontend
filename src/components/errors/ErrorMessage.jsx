import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <>
      {message && (
        <div className="danger-msg center-row">
          <div className="msg">
            <p className="fw-bold fs-4 text-danger text-center text-uppercase">
              {message}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
