import { useParams } from "react-router-dom";
import TitleCard from "components/cards/title-card/TitleCard";
import PageTitle from "components/ui/PageTitle";
import AuthorPublisherForm from "components/forms/AuthorPublisherForm";
import { useFormResource } from "hooks/useFormResource";

const PublisherEdit = () => {
  const { id } = useParams();
  const { name, setName, loading, error, handleSubmit, handleChange } =
    useFormResource({ resource: "publishers", id });

  return (
    <section>
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
    </section>
  );
};

export default PublisherEdit;
