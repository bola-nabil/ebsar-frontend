import { useParams } from "react-router-dom";
import TitleCard from "components/cards/title-card/TitleCard";
import PageTitle from "components/ui/PageTitle";
import AuthorPublisherForm from "components/forms/AuthorPublisherForm";
import {useFormResource} from "hooks/useFormResource";

const AuthorEdit = () => {
 const { id } = useParams();
  const { name, setName, loading, error, handleSubmit, handleChange } =
    useFormResource({ resource: "authors", id });

 return (
    <main className="mobile-container edit-page">
      <PageTitle title="Edit Author" />
      <TitleCard title="Update Author" pathCard="/authors" titleCard="Authors" />
      <AuthorPublisherForm
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        onChange={handleChange}
        error={error}
        loading={loading}
        submitText="Update Author"
      />
    </main>
  );
};

export default AuthorEdit;
