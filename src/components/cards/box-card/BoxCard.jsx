import {memo} from "react";
import { motion } from "framer-motion";
import {DetailsButton, ControlsButtons} from "components/ui/buttons";
import {containerVariants, cardVariants} from "utilts/animations";
import "./box-card.css";

const getCardTitle = (card) => card.title || card.name;

const getShortName = (name = "") =>
  name.split(" ").slice(0, 2).join(" ");

const CardImage = ({ image, title }) => (
  <div className="card-img">
    <img
      src={image.image_path || image}
      alt={title}
      className="object-fit-cover w-100"
    />
    <h4 className="fw-bold fs-5 mt-3 mb-3">{title}</h4>
  </div>
);

const PopularBooks = ({ books = [] }) => (
  <div className="popular-books">
    <p className="fw-medium">Popular Books</p>
    <div className="popular rounded-2">
      {books.length > 0 ? (
        <span className="text-white">{books[0].title}</span>
      ) : (
        <span className="text-white">...</span>
      )}
    </div>
  </div>
);

const BoxCard = ({ cards = [], cardPath, handleActive, handleDelete }) => {
  return (
    <motion.div 
      className="cards"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {cards.map((card) => {
        const title = getCardTitle(card);

        return (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            layout
            className="card center-col bg-white rounded-3 text-center"
          >
            {card.image ? (
              <CardImage image={card.image} title={title} />
            ) : (
              <>
                <h3 className="fw-bold card-name mt-4">
                  {getShortName(card.name)}
                </h3>
                <PopularBooks books={card.books} />
              </>
            )}

            <DetailsButton onClick={() => handleActive(card.id)} />

            <ControlsButtons
              cardPath={cardPath}
              card={card}
              handleDelete={handleDelete}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};


export default memo(BoxCard);
