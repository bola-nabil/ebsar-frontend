import React, { useState, useEffect, useMemo } from "react";
import { api } from "api";
import { useNavigate } from "react-router-dom";
import Carousel from "../../ui/carousel/Carousel";
import "./details-card.css";

const LoadingCard = () => (
  <div className="loading-card center-col text-white rounded-3 position-absolute top-50 start-50">
    <div className="loading-style rounded-circle"></div>
    <h4>Loading...</h4>
  </div>
);

const AuthorsBox = ({ authors }) => (
  <div className="box rounded-3">
    <h4 className="fw-medium text-center">Authors</h4>
    <div className="box-data">
      {authors.map((author) => (
        <span key={author.id} className="rounded-2 text-white fw-bold">
          {author.name}
        </span>
      ))}
    </div>
  </div>
);

const CategoriesBox = ({ categories }) => (
  <div className="box">
    <h4>Categories</h4>
    <div className="box-data">
      {categories.map((category) => (
        <span
          key={category.id}
          className="category fw-bold text-white rounded-2"
        >
          {category.name}
        </span>
      ))}
    </div>
  </div>
);

const DetailsCard = ({ active, handleActive, DetailsPath, cardId }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cardId) return;

    setLoading(true);
    api
      .get(`/${DetailsPath}/${cardId}`)
      .then((res) => setContent(res.data))
      .catch((err) => {
        console.error("Failed to fetch details =>", err);
        navigate("/server-failed");
      })
      .finally(() => setLoading(false));
  }, [cardId, DetailsPath, navigate]);

  const data = useMemo(() => content?.book || content?.category || content?.author || content?.publisher, [content]);
  if (!active) return null;
  if (loading || !data) return <LoadingCard />;

  const books = data.books || [];
  const authors = data.authors || [];
  const categories = data.categories || [];

  const hasBooks = books.length > 0;
  const hasAuthors = authors.length > 0;

  return (
    <div className="details-card position-relative" onClick={handleActive}>
      <div className="card bg-white rounded-3 position-absolute top-50 start-50">
        {data.image ? (
          <div className="card-img">
            <img
              src={typeof data.image === "string" ? data.image : data.image.image_path}
              alt={data.title || data.name || "Image"}
            />
          </div>
        ) : (
          <div className="card-welcome center-row">
            <div className="welcome-style rounded-circle">
              <p className="center-row fw-bold text-white">Books</p>
            </div>
          </div>
        )}

        <div className="card-info">
          <div className="card-title center-col">
            <h3 className="fw-medium">{data.title || data.name}</h3>
            {data.publisher && (
              <p className="fw-medium">
                Publisher: <span>{data.publisher.name}</span>
              </p>
            )}
          </div>

          <div className="info-boxs">
            {hasAuthors && <AuthorsBox authors={authors} />}
            {categories.length > 0 && <CategoriesBox categories={categories} />}
          </div>

          {data.file && (
            <div className="audio center-row">
              <audio controls>
                <source src={data.file.file_path} type="audio/mpeg" />
              </audio>
            </div>
          )}

          {!hasAuthors && hasBooks && <Carousel books={books} interval={3000} />}
          {!hasAuthors && !hasBooks && (
            <div className="center-row">
              <p className="text-danger fw-bold fs-3">No Books Found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
