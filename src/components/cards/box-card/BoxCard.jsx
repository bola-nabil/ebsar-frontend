import React from "react";
import {DetailsButton, ControlsButtons} from "components/ui/buttons";
import "./box-card.css";

const BoxCard = ({ cards, cardPath, handleActive, handleDelete }) => {
  return (
    <div className="cards">
      {cards.map((card) => (
        <div
          className="card center-col bg-white rounded-3 text-center"
          key={card.id}
        >
          {card.image ? (
            <div className="card-img">
              <img
                src={card.image.image_path || card.image}
                alt="card background"
                className="object-fit-cover w-100"
              />
              <h4 className="fw-bold fs-5 mt-3 mb-3">
                {card.title || card.name}
              </h4>
            </div>
          ) : (
            <div>
              <h3 className="fw-bold card-name mt-4">
                {card.name.split(" ").slice(0, 2).join(" ")}
              </h3>
              <div className="popular-books">
                <p className="fw-medium">Popular Books</p>
                <div className="popular rounded-2">
                  {card.books.length !== 0 ? (
                    <div>
                      {card.books
                        ?.map((book) => (
                          <span key={book.id} className="text-white">
                            {book.title}
                          </span>
                        ))
                        .slice(0, 1)}
                    </div>
                  ) : (
                    <span className="text-white rounded-2">...</span>
                  )}
                </div>
              </div>
            </div>
          )}
          <DetailsButton onClick={() => handleActive(card.id)} />
          <ControlsButtons
            cardPath={cardPath}
            card={card}
            handleDelete={handleDelete}
          />
        </div>
      ))}
    </div>
  );
};

export default BoxCard;
