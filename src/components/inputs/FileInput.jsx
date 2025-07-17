import React from "react";
import FieldError from "../errors/FieldError";

const FileInput = ({ label, name, onChange, error, className }) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        className="form-control"
        type="file"
        id={name}
        name={name}
        onChange={onChange}
      />
      {error && <FieldError error={error} />}
    </div>
  );
};

export default FileInput;
