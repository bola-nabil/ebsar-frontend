import React from "react";
import FieldError from "../ui/error/FieldError";

const MultiSelectInput = ({
  className,
  label,
  name,
  value,
  onChange,
  options,
  error,
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        multiple
        id={name}
        className="form-select"
        value={value}
        onChange={onChange}
      >
        <option disabled>Select {label}</option>
        {options.length === 0 ? (
          <option disabled>Loading...</option>
        ) : (
          options.map((obj) => (
            <option key={obj.id} value={obj.id}>
              {obj.name}
            </option>
          ))
        )}
      </select>
      {error && <FieldError error={error} />}
    </div>
  );
};

export default MultiSelectInput;
