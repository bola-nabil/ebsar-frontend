import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

export const useDashboard = () => {
  const [books, setBooks] = useState([]);
  const [counts, setCounts] = useState({});
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
      } catch (error) {
        console.error("Dashboard fetch failed:", error);
        navigate("/server-failed");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const logout = async () => {
    try {
      setLoading(true);
      await api.post("/admin/logout");
      localStorage.removeItem("admin_token");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      navigate("/server-failed");
    } finally {
      setLoading(false);
    }
  };

  return { books, counts, loading, logout };
};
