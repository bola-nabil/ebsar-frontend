import React from "react";
import TextInput from "../inputs/TextInput";
import SelectInput from "../inputs/SelectInput";
import MultiSelectInput from "../inputs/MultiSelectInput";
import FileInput from "../inputs/FileInput";
import SubmitButton from "../buttons/SubmitButton";

const BookForm = ({
  form,
  errors,
  loading,
  handleChange,
  handleMultiSelect,
  handleSubmit,
  publishers,
  authors,
  categories,
  submitLabel,
}) => (
  <div className="form-style">
    <form onSubmit={handleSubmit} className="form-control">
      <TextInput
        className="mb-3"
        label="Title"
        name="title"
        value={form.title}
        onChange={handleChange}
        error={errors?.title}
      />

      <SelectInput
        className="mb-3"
        label="Publisher"
        name="publisher_id"
        options={publishers}
        value={form.publisher_id}
        onChange={handleChange}
        error={errors?.publisher_id}
      />

      <MultiSelectInput
        className="mb-3"
        label="Authors"
        name="authors"
        value={form.author_ids}
        onChange={(e) =>
          handleMultiSelect("author_ids", e.target.selectedOptions)
        }
        options={authors}
        error={errors?.author_ids}
      />

      <MultiSelectInput
        className="mb-3"
        label="Categories"
        name="categories"
        value={form.category_ids}
        onChange={(e) =>
          handleMultiSelect("category_ids", e.target.selectedOptions)
        }
        options={categories}
        error={errors?.category_ids}
      />

      <FileInput
        className="mb-3"
        label="Image"
        name="image"
        onChange={handleChange}
        error={errors?.image}
      />

      <FileInput
        className="mb-3"
        label="File"
        name="file"
        onChange={handleChange}
        error={errors?.file}
      />

      <SubmitButton loading={loading} content={submitLabel} />
    </form>
  </div>
);

export default BookForm;
