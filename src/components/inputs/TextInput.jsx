import React from "react";
import FieldError from "../ui/error/FieldError";
const TextInput = ({
  className = "",
  label,
  name,
  value,
  onChange,
  error,
  showError = true,
  ...props
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
      {showError ? (
        error && <FieldError error={error} />
      ) : (
        <div className="error-message mt-2">
          <p className="text-danger">{error}</p>
        </div>
      )}
    </div>
  );
};

export default TextInput;
