import React, { useEffect } from "react";
import { api } from "../../../api";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";
import useBookForm, { initialFormState } from "../hooks/useBookForm";
import TitleCard from "../../../components/cards/TitleCard";
import PageTitle from "../../../components/ui/PageTitle";

const BookCreate = () => {
  const {
    form,
    setForm,
    errors,
    setErrors,
    loading,
    setLoading,
    handleChange,
    handleMultiSelect,
  } = useBookForm();

  const [publishers, setPublishers] = React.useState([]);
  const [authors, setAuthors] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pubRes, authRes, catRes] = await Promise.all([
          api.get("/publishers"),
          api.get("/authors"),
          api.get("/categories"),
        ]);

        setPublishers(pubRes.data.publishers);
        setAuthors(authRes.data.authors);
        setCategories(catRes.data.categories);
      } catch (err) {
        console.error("Failed to fetch form data:", err);
        navigate("/server-failed");
      }
    };
    fetchData();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    for (const key in form) {
      if (Array.isArray(form[key])) {
        form[key].forEach((id) => data.append(`${key}[]`, id));
      } else {
        data.append(key, form[key]);
      }
    }

    try {
      const res = await api.post("/books", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.status === "success") {
        setForm(initialFormState);
        setErrors({});
        navigate("/books");
      } else {
        navigate("/server-failed");
      }
    } catch (err) {
      setErrors(err?.response?.data?.errors || {});
      navigate("/server-failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mobile-container edit-page">
      <PageTitle title="Create Book" />

      <TitleCard title="Create Book" pathCard="/books" titleCard="Books" />
      <BookForm
        {...{
          form,
          errors,
          loading,
          handleChange,
          handleMultiSelect,
          handleSubmit,
          publishers,
          authors,
          categories,
          submitLabel: "Create Book",
        }}
      />
    </div>
  );
};

export default BookCreate;
