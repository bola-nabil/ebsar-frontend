import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./carousel.css";

const Carousel = ({ books, interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const loop = setInterval(() => {
      setIndex((prev) => (prev + 1) % books?.length);
    }, interval);

    return () => clearInterval(loop);
  }, [books?.length, interval]);

  return (
    <div className="carousel-container rounded-2 position-relative center-row w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={books[index]?.id}
          className="carousel-item text-center d-block mr-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={books[index]?.image?.image_path}
            alt={books[index]?.title}
            className="rounded-2 object-fit-cover w-full"
          />
          <h3 className="text-white">{books[index]?.title}</h3>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
