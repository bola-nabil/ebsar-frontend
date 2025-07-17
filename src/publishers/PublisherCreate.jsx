import React, { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import TitleCard from "../components/cards/TitleCard";
import AuthorPublisherForm from "../components/forms/AuthorPublisherForm";
import PageTitle from "../components/PageTitle";
const PublisherCreate = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/publishers", {
        name: name,
      });

      if (response.data.status === "success") {
        navigate("/publishers");
      } else {
        navigate("/server-failed");
      }
    } catch (err) {
      console.error("Failed to create publisher => ", err);
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
      <PageTitle title="Create Publisher" />

      <TitleCard
        title="Create Publisher"
        pathCard="/publishers"
        titleCard="Publishers"
      />

      <AuthorPublisherForm
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        onChange={handleChange}
        error={error}
        loading={loading}
        submitText="Create Publisher"
      />
    </div>
  );
};

export default PublisherCreate;
