import React from "react";
import { motion } from "framer-motion";

const Pagination = ({ totalPages, currentPage, paginate }) => {
  return (
    <>
      {totalPages > 1 && (
        <nav>
          <motion.ul
            className="pagination justify-content-center mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {[...Array(totalPages)].map((_, i) => (
              <motion.li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button onClick={() => paginate(i + 1)} className="page-link">
                  {i + 1}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      )}
    </>
  );
};

export default Pagination;
