import React, { useState, useEffect } from "react";
import { api } from "../../../api";
import { useParams, useNavigate } from "react-router-dom";
import TitleCard from "../../../components/cards/TitleCard";
import AuthorPublisherForm from "../../../components/forms/AuthorPublisherForm";
import PageTitle from "../../../components/ui/PageTitle";


const PublisherEdit = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/publishers/${id}`)
      .then((response) => {
        setName(response.data.publisher.name);
      })
      .catch((err) => {
        console.error("Can't find publisher data => ", err);
        navigate("/server-failed");
      });
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.put(`/publishers/${id}`, {
        name: name,
      });

      if (response.data.status === "success") {
        navigate("/publishers");
      } else {
        navigate("/server-failed");
      }
    } catch (err) {
      console.error("Failed to update publisher => ", err);
      setError(`* ${err?.response?.data?.message || "Something went wrong."}`);
      if (!err?.response?.data?.message) {
        navigate("/server-failed");
      }
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
      <PageTitle title="Edit Publisher" />

      <TitleCard
        title="Update Publisher"
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
        submitText="Update Publisher"
      />
    </div>
  );
};

export default PublisherEdit;
