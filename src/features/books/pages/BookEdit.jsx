import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "api";
import PageTitle from "components/ui/PageTitle";
import {TitleCard} from "components/cards";
import BookForm from "../components/BookForm";
import useBookForm from "../hooks/useBookForm";
import useBookLookups from "../hooks/useBookLookups";

const BookEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useBookForm();
  const lookups = useBookLookups();

  useEffect(() => {
    api.get(`/books/${id}`).then((res) => {
      const b = res.data.book;
      book.setForm({
        title: b.title,
        publisher_id: b.publisher_id,
        image: null,
        file: null,
        author_ids: b.authors.map((a) => a.id),
        category_ids: b.categories.map((c) => c.id),
      });
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await book.submit({
      url: `/books/${id}`,
      method: "PUT",
    });

    if (success) navigate("/books");
  };

  return (
    <section>
      <PageTitle title="Edit Book" />
      <TitleCard title="Edit Book" pathCard="/books" titleCard="Books" />

      <BookForm
        {...book}
        {...lookups}
        handleSubmit={handleSubmit}
        submitLabel="Update Book"
      />
    </section>
  );
};

export default BookEdit;
