import React, { useState, useEffect, useMemo } from "react";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";
import Carousel from "../Carousel";

const DetailsCard = ({ active, handleActive, DetailsPath, cardId }) => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cardId) return;

    setLoading(true);
    api
      .get(`/${DetailsPath}/${cardId}`)
      .then((response) => {
        setContent(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch book data => ", error);
        navigate("/server-failed");
        setLoading(false);
      });
  }, [cardId, DetailsPath, navigate]);

  const data = useMemo(() => {
    return (
      content.book || content.category || content.author || content.publisher
    );
  }, [content]);

  const books = useMemo(() => data?.books, [data]);
  const booksLength = books?.length || 0;
  const authorsLength = data?.authors?.length || 0;

  return (
    <div>
      {active && (
        <div className="details-card position-relative" onClick={handleActive}>
          {loading ? (
            <div className="loading-card center-col text-white rounded-3 position-absolute top-50 start-50">
              <div className="loading-style rounded-circle"></div>
              <h4>Loading...</h4>
            </div>
          ) : (
            <div className="card bg-white rounded-3 position-absolute top-50 start-50">
              {data?.image && (
                <div className="card-img">
                  <img
                    src={
                      typeof data.image === "string"
                        ? data.image
                        : data.image.image_path
                    }
                    alt={data.title || data.name || "Image"}
                  />
                </div>
              )}

              {!data?.image?.image_path && !data?.image && (
                <div className="card-welcome center-row">
                  <div className="welcome-style rounded-circle">
                    <p className="center-row fw-bold text-white">Books</p>
                  </div>
                </div>
              )}

              <div className="card-info">
                <div className="card-title center-col">
                  <h3 className="fw-medium">{data?.title || data?.name}</h3>
                  {data?.publisher && (
                    <p className="fw-medium" key={data.publisher.id}>
                      Publisher <span>{data?.publisher?.name}</span>
                    </p>
                  )}
                </div>
                <div className="info-boxs">
                  {data?.authors && (
                    <div className="box rounded-3">
                      <h4 className="fw-medium text-center">Authors</h4>
                      <div className="box-data">
                        {data?.authors?.map((author) => (
                          <span
                            key={author.id}
                            className="rounded-2 text-white fw-bold"
                          >
                            {author?.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {data?.categories && (
                    <div className="box">
                      <h4>Categories</h4>
                      <div className="box-data">
                        {data?.categories?.map((category) => (
                          <span
                            key={category.id}
                            className="category fw-bold text-white rounded-2"
                          >
                            {category?.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {data?.file && (
                  <div className="audio center-row">
                    <audio controls>
                      <source src={data?.file?.file_path} type="audio/mpeg" />
                    </audio>
                  </div>
                )}
                {authorsLength === 0 && booksLength > 0 && (
                  <div>
                    <Carousel books={books} interval={3000} />
                  </div>
                )}

                {authorsLength === 0 && booksLength === 0 && (
                  <div className="center-row">
                    <p className="text-danger fw-bold fs-3">No Books Found</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DetailsCard;
