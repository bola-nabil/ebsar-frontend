import TitleCard from "components/cards/title-card/TitleCard";
import PageTitle from "components/ui/PageTitle";
import AuthorPublisherForm from "components/forms/AuthorPublisherForm";
import {useFormResource} from "hooks/useFormResource";

const PublisherCreate = () => {
 const { name, setName, loading, error, handleSubmit, handleChange } =
    useFormResource({ resource: "publishers" });

    return (
      <section>
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
      </section>
  );
};

export default PublisherCreate;
