import TitleCard from "components/cards/title-card/TitleCard";
import PageTitle from "components/ui/PageTitle";
import AuthorPublisherForm from "components/forms/AuthorPublisherForm";
import {useFormResource} from "hooks/useFormResource";

const AuthorCreate = () => {
  const { name, setName, loading, error, handleSubmit, handleChange } =
    useFormResource({ resource: "authors" });

  return (
    <main className="mobile-container edit-page">
      <PageTitle title="Create Author" />
      <TitleCard title="Create Author" pathCard="/authors" titleCard="Authors" />
      <AuthorPublisherForm
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        onChange={handleChange}
        error={error}
        loading={loading}
        submitText="Create Author"
      />
    </main>
  );
};

export default AuthorCreate;
