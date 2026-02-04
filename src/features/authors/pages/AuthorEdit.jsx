import React, { useState, useEffect } from "react";
import { api } from "../../../api";
import { useNavigate, useParams } from "react-router-dom";
import TitleCard from "../../../components/cards/TitleCard";
import AuthorPublisherForm from "../../../components/forms/AuthorPublisherForm";
import PageTitle from "../../../components/ui/PageTitle";

const AuthorEdit = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    api
      .get(`/authors/${id}`)
      .then((response) => {
        if (isMounted) {
          setName(response.data.author.name);
        }
      })
      .catch((err) => {
        console.error("Error fetching author data => ", err);
        navigate("/server-failed");
      });

    return () => {
      isMounted = false;
    };
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.put(`/authors/${id}`, {
        name: name,
      });

      if (response.data.status === "success") {
        navigate("/authors");
      } else {
        navigate("/server-failed");
      }
    } catch (err) {
      console.error("Failed to update author => ", err);
      setError(`* ${err?.response?.data?.message || "Something went wrong."}`);
      navigate("/server-failed");
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
      <PageTitle title="Edit Author" />

      <TitleCard
        title="Update Author"
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
        submitText="Update Author"
      />
    </div>
  );
};

export default AuthorEdit;
