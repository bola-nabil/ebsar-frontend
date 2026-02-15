import React from "react";
import TextInput from "../inputs/TextInput";
import SubmitButton from "../ui/buttons/submit-button/SubmitButton";

const AuthorPublisherForm = ({
  handleSubmit,
  name,
  setName,
  error,
  loading,
  submitText,
}) => {
  return (
    <div className="center-row form-center">
      <div className="form-style">
        <form onSubmit={handleSubmit}>
          <TextInput
            className="mb-4"
            label="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={error}
            showError={false}
          />
          <SubmitButton loading={loading} content={submitText} />
        </form>
      </div>
    </div>
  );
};

export default AuthorPublisherForm;
