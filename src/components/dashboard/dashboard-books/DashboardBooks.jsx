import React from "react";
import { motion } from "framer-motion";
import { dashboardBooksVariants, rowVariants } from "utilts/animations";
import "./dashboard-books.css";

const DashboardBooks = ({ lastBooks }) => {
  return (
    <motion.div
      className="last-books bg-white rounded-4"
      variants={dashboardBooksVariants}
      initial="hidden"
      animate="show"
    >
      <h3>Recent Added Books</h3>
      <table className="bg-white rounded-2 w-100 overflow-hidden">
        <thead className="text-white">
          <tr>
            <th>Title</th>
            <th>Authors</th>
          </tr>
        </thead>
        <tbody>
          {lastBooks.map((book) => (
            <motion.tr
              key={book.id}
              variants={rowVariants}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.03)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <td>{book.title}</td>
              <td>
                {book.authors?.map((author) => (
                  <div key={author.id} className="author-name">
                    <span>{author.name}</span>
                  </div>
                ))}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default DashboardBooks;
