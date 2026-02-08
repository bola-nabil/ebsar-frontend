import { useEffect, useState } from "react";
import { api } from "api";
import { useNavigate } from "react-router-dom";

const useBookLookups = () => {
  const [publishers, setPublishers] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLookups = async () => {
      try {
        const [pubRes, authRes, catRes] = await Promise.all([
          api.get("/publishers"),
          api.get("/authors"),
          api.get("/categories"),
        ]);

        setPublishers(pubRes.data.publishers);
        setAuthors(authRes.data.authors);
        setCategories(catRes.data.categories);
      } catch {
        navigate("/server-failed");
      }
    };

    fetchLookups();
  }, [navigate]);

  return { publishers, authors, categories };
};

export default useBookLookups;
