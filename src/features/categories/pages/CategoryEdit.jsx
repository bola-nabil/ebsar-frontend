import { useEffect } from "react";
import { api } from "api";
import { useParams, useNavigate } from "react-router-dom";
import { TitleCard } from "components/cards";
import PageTitle from "components/ui/PageTitle";
import CategoryForm from "../components/CategoryForm";
import useCategoryForm from "../hooks/useCategoryForm";

const CategoryEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const category = useCategoryForm({ id, mode: "edit" });

  useEffect(() => {
    if (!id) return;

    const fetchCategory = async () => {
      try {
        const res = await api.get(`/categories/${id}`);

        category.setName(res.data.category.name);
        category.setCurrentImage(res.data.category.image);
      } catch (error) {
        navigate("/server-failed");
      }
    };

    fetchCategory();
  }, [id, category, navigate]);

  return (
    <section>
      <PageTitle title="Edit Category" />

      <TitleCard
        title="Update Category"
        pathCard="/categories"
        titleCard="Categories"
      />

      <CategoryForm
        {...category}
        handleSubmit={(e) => {
          e.preventDefault();
          category.submit();
        }}
        submitText="Update Category"
      />
    </section>
  );
};

export default CategoryEdit;
