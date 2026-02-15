import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "api";

const useCategoryForm = ({ id = null, mode = "create" }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (errors.name) setErrors((prev) => ({ ...prev, name: null }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    if (errors.image) setErrors((prev) => ({ ...prev, image: null }));
  };

  const submit = async () => {
    setLoading(true);

    if (mode === "create" && !image) {
      setErrors({ image: "* Category image is required" });
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    if (image) formData.append("image", image);
    if (mode === "edit") formData.append("_method", "PUT");

    try {
      const url = mode === "create" ? "/categories" : `/categories/${id}`;

      const response = await api.post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.status === "success") {
        navigate("/categories");
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

  return {
    name,
    image,
    currentImage,
    loading,
    errors,
    setName,
    setImage,
    setCurrentImage,
    handleNameChange,
    handleImageChange,
    submit,
  };
};

export default useCategoryForm;
