import React from 'react';
import FieldError from 'components/ui/error/FieldError';

const PasswordInput = ({ label, name, value, onChange, error }) => {
  return (
     <div className="mb-4">
        <label htmlFor={name} className="form-label">
            {label}
        </label>
        <input
            type="password"
            name={name}
            id={name}
            placeholder={label}
            className="form-control"
            value={value}
            onChange={onChange}
        />
        {error && <FieldError error={error} />}
  </div>
);
}

export default PasswordInput;