import React from "react";
import TextInput from "../inputs/TextInput";
import SubmitButton from "../buttons/SubmitButton";

const AuthorPublisherForm = ({
  handleSubmit,
  name,
  setName,
  error,
  loading,
  submitText,
}) => {
  return (
    <div className="form-style center-form center-row">
      <form onSubmit={handleSubmit} className="form-control">
        <TextInput
          className="mb-4"
          label="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={error}
          errorStatus={false}
        />
        <SubmitButton loading={loading} content={submitText} />
      </form>
    </div>
  );
};

export default AuthorPublisherForm;
