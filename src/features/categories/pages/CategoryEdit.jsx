import React, { useState, useEffect } from "react";
import { api } from "../../../api";
import { useNavigate, useParams } from "react-router-dom";
import TitleCard from "../../../components/cards/TitleCard";
import CategoryForm from "../components/CategoryForm";
import PageTitle from "../../../components/ui/PageTitle";

const CategoryEdit = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/categories/${id}`)
      .then((response) => {
        setName(response.data.category.name);
        setCurrentImage(response.data.category.image);
      })
      .catch((err) => {
        console.error("Failed to fetch category data =>", err);
        navigate("/server-failed");
      });
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    if (image) formData.append("image", image);
    formData.append("_method", "PUT");

    try {
      const response = await api.post(`/categories/${id}`, formData, {
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
      console.error("Failed to update current category =>", err);
      setErrors(err?.response?.data?.errors || {});
      navigate("/server-failed");
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
      <PageTitle title="Edit Category" />

      <TitleCard
        title="Update Category"
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
        currentImage={currentImage}
        errors={errors}
        loading={loading}
        handleSubmit={handleSubmit}
        submitText="Update Category"
      />
    </div>
  );
};

export default CategoryEdit;
