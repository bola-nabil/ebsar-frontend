import { useState, useCallback } from "react";

export const initialFormState = {
  title: "",
  publisher_id: "",
  image: null,
  file: null,
  author_ids: [],
  category_ids: [],
};

export default function useBookForm(initialState = initialFormState) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const updateForm = useCallback((name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleChange = useCallback(
    (e) => {
      const { name, value, files } = e.target;
      updateForm(name, files ? files[0] : value);
    },
    [updateForm]
  );

  const handleMultiSelect = useCallback(
    (name, values) => {
      updateForm(
        name,
        Array.from(values).map((v) => v.value)
      );
    },
    [updateForm]
  );

  return {
    form,
    setForm,
    errors,
    setErrors,
    loading,
    setLoading,
    updateForm,
    handleChange,
    handleMultiSelect,
  };
}
