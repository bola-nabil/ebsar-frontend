import React, { memo, useCallback } from "react";
import {
  TextInput,
  SelectInput,
  MultiSelectInput,
  FileInput,
} from "components/inputs";
import { SubmitButton } from "components/ui/buttons";

const BookForm = ({
  form,
  errors = {},
  loading,
  handleChange,
  handleMultiSelect,
  handleSubmit,
  publishers = [],
  authors = [],
  categories = [],
  submitLabel,
}) => {
  const onAuthorsChange = useCallback(
    (e) => handleMultiSelect("author_ids", e),
    [handleMultiSelect],
  );

  const onCategoriesChange = useCallback(
    (e) => handleMultiSelect("category_ids", e),
    [handleMultiSelect],
  );

  return (
    <div className="form-style mt-5">
      <form onSubmit={handleSubmit}>
        <TextInput
          className="mb-3"
          label="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
          error={errors.title}
        />

        <SelectInput
          className="mb-3"
          label="Publisher"
          name="publisher_id"
          value={form.publisher_id}
          options={publishers}
          onChange={handleChange}
          error={errors.publisher_id}
        />

        <MultiSelectInput
          className="mb-3"
          label="Authors"
          name="Authors"
          value={form.author_ids}
          options={authors}
          onChange={onAuthorsChange}
          error={errors.author_ids}
        />

        <MultiSelectInput
          className="mb-3"
          label="Categories"
          name="Categories"
          value={form.category_ids}
          options={categories}
          onChange={onCategoriesChange}
          error={errors.category_ids}
        />

        <FileInput
          className="mb-3"
          label="Image"
          name="image"
          onChange={handleChange}
          error={errors.image}
        />

        <FileInput
          className="mb-3"
          label="File"
          name="file"
          onChange={handleChange}
          error={errors.file}
        />

        <SubmitButton loading={loading} content={submitLabel} />
      </form>
    </div>
  );
};

export default memo(BookForm);
