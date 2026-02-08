import React from "react";
import {TextInput, FileInput} from "components/inputs";
import {SubmitButton} from "components/ui/buttons";

const CategoryForm = ({
  name,
  setName,
  image,
  setImage,
  currentImage,
  errors,
  loading,
  handleSubmit,
  submitText = "Submit",
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
          error={errors?.name}
        />

        {currentImage && (
          <div className="current-image center-col">
            <h3 className="fs-5">Current Image</h3>
            <img
              src={currentImage}
              alt="Current Category"
              className="rounded-4"
            />
          </div>
        )}

        <FileInput
          className="my-4"
          label="Image"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
          error={errors?.image}
        />

        <SubmitButton loading={loading} content={submitText} />
      </form>
    </div>
  );
};

export default CategoryForm;
