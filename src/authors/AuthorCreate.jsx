import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import TitleCard from "../components/cards/TitleCard";
import AuthorPublisherForm from "../components/forms/AuthorPublisherForm";
import PageTitle from "../components/PageTitle";

const AuthorCreate = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/authors", {
        name: name,
      });

      if (response.data.status === "success") {
        navigate("/authors");
      } else {
        navigate("/server-failed");
      }
    } catch (err) {
      console.error("Error creating author => ", err);
      setError(`* ${err?.response?.data?.message || "Something went wrong."}`);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
    if (error) setError("");
  };

  return (
    <div className="mobile-container edit-page">
      <PageTitle title="Create Author" />

      <TitleCard
        title="Create Author"
        pathCard="/authors"
        titleCard="Authors"
      />
      <AuthorPublisherForm
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        onChange={handleChange}
        error={error}
        loading={loading}
        submitText="Create Author"
      />
    </div>
  );
};

export default AuthorCreate;
