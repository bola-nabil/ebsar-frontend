import { useState, useEffect, useCallback, useMemo } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

const useCrudList = ({ endpoint, searchPath, perPage = 8 }) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = useMemo(
    () => Math.ceil(items.length / perPage),
    [items, perPage],
  );

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/${endpoint}`);
      setItems(data[endpoint]);
    } catch (err) {
      navigate("/server-failed");
      console.error(`Fetch ${endpoint} error =>`, err);
    } finally {
      setLoading(false);
    }
  }, [endpoint, navigate]);

  const fetchSearchResults = useCallback(async () => {
    const trimmed = searchTerm.trim();
    if (!trimmed) {
      fetchAll();
      return;
    }

    setLoading(true);
    try {
      const { data } = await api.get(`/${endpoint}/search/${trimmed}`);
      if (data.status === "success") {
        setItems(data[endpoint]);
        setCurrentPage(1);
      } else {
        setItems([]);
      }
    } catch (err) {
      navigate("/server-failed");
      console.error(`Search ${endpoint} error =>`, err);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, endpoint, navigate, fetchAll]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      fetchAll();
    }
  }, [searchTerm, fetchAll]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [items, totalPages, currentPage]);

  const handleDelete = useCallback(
    async (id) => {
      if (
        !window.confirm(
          `Are you sure you want to delete this ${endpoint.slice(0, -1)}?`,
        )
      )
        return;

      setLoading(true);
      try {
        const { data } = await api.delete(`/${endpoint}/${id}`);
        if (data.status === "success") {
          setItems((prev) => prev.filter((item) => item.id !== id));
        } else {
          navigate("/server-failed");
        }
      } catch (err) {
        navigate("/server-failed");
        console.error(`Delete ${endpoint} error =>`, err);
      } finally {
        setLoading(false);
      }
    },
    [endpoint, navigate],
  );

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return items.slice(start, start + perPage);
  }, [items, currentPage, perPage]);

  return {
    items: currentItems,
    searchTerm,
    setSearchTerm,
    handleSearch: fetchSearchResults,
    handleDelete,
    loading,
    currentPage,
    totalPages,
    setCurrentPage,
  };
};

export default useCrudList;
