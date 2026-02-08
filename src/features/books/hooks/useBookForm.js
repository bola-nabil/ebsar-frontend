import { useState, useCallback } from "react";
import { api } from "api";

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
    setErrors((prev) => ({ ...prev, [name]: null }));
  }, []);

  const handleChange = useCallback(
    (e) => {
      const { name, value, files, type } = e.target;
      updateForm(name, type === "file" ? files?.[0] || null : value);
    },
    [updateForm]
  );

  const handleMultiSelect = useCallback(
    (name, e) => {
      const values = Array.from(e.target.selectedOptions).map(
        (o) => o.value
      );
      updateForm(name, values);
    },
    [updateForm]
  );

  const submit = useCallback(
    async ({ url, method = "POST" }) => {
      setLoading(true);
      const data = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => data.append(`${key}[]`, v));
        } else if (value !== null && value !== "") {
          data.append(key, value);
        }
      });

      if (method === "PUT") {
        data.append("_method", "PUT");
      }

      try {
        const res = await api.post(url, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        return res.data.status === "success";
      } catch (err) {
        setErrors(err?.response?.data?.errors || {});
        return false;
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  const resetForm = useCallback(() => {
    setForm(initialFormState);
    setErrors({});
  }, []);

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
    submit,
    resetForm,
  };
}
