import { TitleCard } from "components/cards";
import CategoryForm from "../components/CategoryForm";
import PageTitle from "components/ui/PageTitle";
import useCategoryForm from "../hooks/useCategoryForm";

const CategoryCreate = () => {
  const category = useCategoryForm({ mode: "create" });

  return (
    <section>
      <PageTitle title="Create Category" />

      <TitleCard
        title="Create Category"
        pathCard="/categories"
        titleCard="Categories"
      />

      <CategoryForm
        {...category}
        handleSubmit={(e) => {
          e.preventDefault();
          category.submit();
        }}
        submitText="Create Category"
      />
    </section>
  );
};

export default CategoryCreate;
