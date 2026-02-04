import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../../api";
import BookForm from "../components/BookForm";
import useBookForm from "../hooks/useBookForm";
import TitleCard from "../../../components/cards/TitleCard";
import PageTitle from "../../../components/ui/PageTitle";

const BookEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    form,
    setForm,
    errors,
    setErrors,
    loading,
    setLoading,
    message,
    setMessage,
    handleChange,
    handleMultiSelect,
  } = useBookForm();

  const [publishers, setPublishers] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookRes, pubRes, authRes, catRes] = await Promise.all([
          api.get(`/books/${id}`),
          api.get("/publishers"),
          api.get("/authors"),
          api.get("/categories"),
        ]);

        const book = bookRes.data.book;
        setForm({
          title: book.title || "",
          publisher_id: book.publisher_id || "",
          image: null,
          file: null,
          author_ids: book.authors.map((a) => a.id),
          category_ids: book.categories.map((c) => c.id),
        });

        setPublishers(pubRes.data.publishers);
        setAuthors(authRes.data.authors);
        setCategories(catRes.data.categories);
      } catch (err) {
        setMessage("Failed to fetch book data.");
        console.error(err);
      }
    };
    fetchData();
  }, [id, setForm, setMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();

    for (const key in form) {
      if (Array.isArray(form[key])) {
        form[key].forEach((val) => data.append(`${key}[]`, val));
      } else {
        data.append(key, form[key]);
      }
    }

    data.append("_method", "PUT");

    try {
      const res = await api.post(`/books/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.status === "success") {
        setErrors({});
        navigate("/books");
      }
    } catch (err) {
      setErrors(err?.response?.data?.errors || {});
      setMessage("Failed to update book.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mobile-container edit-page">
      <PageTitle title="Edit Book" />

      <TitleCard title="Edit Book" pathCard="/books" titleCard="Books" />
      <BookForm
        {...{
          form,
          errors,
          message,
          loading,
          handleChange,
          handleMultiSelect,
          handleSubmit,
          publishers,
          authors,
          categories,
          submitLabel: "Update Book",
        }}
      />
    </div>
  );
};

export default BookEdit;
