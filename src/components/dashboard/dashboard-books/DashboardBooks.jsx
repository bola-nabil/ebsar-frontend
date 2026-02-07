import React from 'react';
import "./dashboard-books.css";

const DashboardBooks = ({lastBooks}) => {
  return (
    <div className="last-books bg-white rounded-4">
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
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>
                    {book.authors?.map((author) => (
                      <div key={author.id} className="author-name">
                        <span>{author.name}</span>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
  )
}

export default DashboardBooks;