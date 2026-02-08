import {useEffect} from "react";
import { api } from "api";
import { useParams } from "react-router-dom";
import {TitleCard} from "components/cards";
import PageTitle from "components/ui/PageTitle";
import CategoryForm from "../components/CategoryForm";
import useCategoryForm from "../hooks/useCategoryForm";

const CategoryEdit = () => {
  const { id } = useParams();
  const category = useCategoryForm({id, mode: "edit"});

  useEffect(() => {
    api
      .get(`/categories/${id}`)
      .then((res) => {
        category.setName(res.data.category.name);
        category.setCurrentImage(res.data.category.image);
      })
      .catch(() => {
        window.location.href = "/server-failed";
      });
  }, [id]);


  return (
    <div className="mobile-container edit-page">
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
    </div>
  );
};

export default CategoryEdit;
