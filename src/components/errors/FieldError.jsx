import React from "react";

const FieldError = ({ error }) =>
  error ? <div className="text-danger mt-2 small">* {error[0]}</div> : null;

export default FieldError;
