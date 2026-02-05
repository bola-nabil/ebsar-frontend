import React, { useState } from "react";
import { api } from "../../../api";
import { useNavigate } from "react-router-dom";
import TitleCard from "../../../components/cards/title-card/TitleCard";
import CategoryForm from "../components/CategoryForm";
import PageTitle from "../../../components/ui/PageTitle";

const CategoryCreate = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!image) {
      setErrors((prev) => ({ ...prev, image: "* Category image is required" }));
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    try {
      const response = await api.post("/categories", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.status === "success") {
        navigate("/categories");
      } else {
        navigate("/server-failed");
      }
    } catch (err) {
      console.error("Failed to create category =>", err);
      setErrors(err?.response?.data?.errors || {});
    } finally {
      setLoading(false);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (errors.name) setErrors((prev) => ({ ...prev, name: null }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    if (errors.image) setErrors((prev) => ({ ...prev, image: null }));
  };

  return (
    <div className="mobile-container edit-page">
      <PageTitle title="Create Category" />

      <TitleCard
        title="Create Category"
        pathCard="/categories"
        titleCard="Categories"
      />
      <CategoryForm
        name={name}
        setName={setName}
        onNameChange={handleNameChange}
        image={image}
        setImage={setImage}
        onImageChange={handleImageChange}
        errors={errors}
        loading={loading}
        handleSubmit={handleSubmit}
        submitText="Create Category"
      />
    </div>
  );
};

export default CategoryCreate;
