import React from "react";

const Paginate = ({ totalPages, currentPage, paginate }) => {
  return (
    <>
      {totalPages > 1 && (
        <nav>
          <ul className="pagination justify-content-center mt-5">
            {[...Array(totalPages)].map((_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button onClick={() => paginate(i + 1)} className="page-link">
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Paginate;
