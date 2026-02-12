import PageTitle from "components/ui/PageTitle";
import { TitleCard } from "components/cards";
import BookForm from "../components/BookForm";
import useBookForm from "../hooks/useBookForm";
import useBookLookups from "../hooks/useBookLookups";
import { useNavigate } from "react-router-dom";

const BookCreate = () => {
  const navigate = useNavigate();
  const book = useBookForm();
  const lookups = useBookLookups();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await book.submit({ url: "/books" });

    if (success) {
      book.resetForm();
      navigate("/books");
    }
  };

  return (
    <section>
      <PageTitle title="Create Book" />
      <TitleCard title="Create Book" pathCard="/books" titleCard="Books" />

      <BookForm
        {...book}
        {...lookups}
        handleSubmit={handleSubmit}
        submitLabel="Create Book"
      />
    </section>
  );
};

export default BookCreate;
