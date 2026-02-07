import React, { useState, useEffect } from "react";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dashboard.css";
import {
  faBook,
  faFeather,
  faUser,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import DonutChart from "../../components/cards/DonutChart"
import Loading from "../../components/ui/loading/Loading";
import PageTitle from "../../components/ui/PageTitle";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [counts, setCounts] = useState({});
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dashboardRes, booksRes] = await Promise.all([
          api.get("/dashboard"),
          api.get("/books"),
        ]);
        setCounts(dashboardRes.data.counts);
        setBooks(booksRes.data.books);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load dashboard or books data => ", error);
        setLoading(false);
        navigate("/server-failed");
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      setLoading(true);
      const response = await api.post("/admin/logout", {});
      if (response.data.status === "success") {
        localStorage.removeItem("admin_token");
        navigate("/");
      } else {
        navigate("/server-failed");
      }
    } catch (error) {
      console.error("Failed to logout => ", error);
      navigate("/server-failed");
    } finally {
      setLoading(false);
    }
  };

  const handleActive = () => {
    setActive(!active);
  };

  const dashboardCounts = [
    { id: 1, title: "Total Books", nums: counts?.books ?? 0, icon: faBook },
    {
      id: 2,
      title: "Total Authors",
      nums: counts?.authors ?? 0,
      icon: faFeather,
    },
    {
      id: 3,
      title: "Total Publishers",
      nums: counts?.publishers ?? 0,
      icon: faUser,
    },
    {
      id: 4,
      title: "Total Categories",
      nums: counts?.categories ?? 0,
      icon: faList,
    },
  ];

  const lastBooks = books.slice(-5);

  if (loading) return <Loading />;

  return (
    <div className="dashboard edit-page mobile-container position-relative">
      <PageTitle title="Dashboard" />

      <div className="dashboard-header d-flex justify-content-between align-items-center w-100">
        <h2>Dashboard</h2>
        <div
          className="dashboard-logout bg-white rounded-circle center-row"
          onClick={handleActive}
        >
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>

      {active && (
        <div className="logout-msg rounded-2 position-absolute">
          <div className="msg text-center">
            <p className="text-white rounded-2 fw-bold" onClick={handleLogout}>
              Logout
            </p>
          </div>
        </div>
      )}

      <div className="dashboard-counts">
        {dashboardCounts.map((card) => (
          <div
            className="dash-card bg-white rounded-4 center-row"
            key={card.id}
          >
            <div className="card-icon text-white rounded-3">
              <FontAwesomeIcon icon={card.icon} />
            </div>
            <div className="card-info">
              <h3 className="fw-bold">{card.nums}</h3>
              <p>{card.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-carts">
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
                    {book.authors.map((author) => (
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

        <div className="books-category bg-white rounded-4 center-col">
          <h3>Books Per Category</h3>
          <DonutChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
