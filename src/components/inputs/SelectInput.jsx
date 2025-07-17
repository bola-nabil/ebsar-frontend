import React from "react";
import FieldError from "../errors/FieldError";

const SelectInput = ({
  className,
  label,
  name,
  options,
  value,
  onChange,
  error,
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        value={value}
        onChange={onChange}
      >
        <option value="">Select publisher</option>
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

export default SelectInput;
