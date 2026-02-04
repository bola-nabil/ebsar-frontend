import React, { useState, useCallback } from "react";
import useCrudList from "../../../hooks/useCrudList";
import CrudListPage from "../../../pages/CrudListPage";


const Authors = () => {
  const {
    items,
    searchTerm,
    setSearchTerm,
    handleSearch,
    handleDelete,
    loading,
    message,
    currentPage,
    totalPages,
    setCurrentPage,
  } = useCrudList({ endpoint: "authors" });

  const [active, setActive] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const toggleDetails = useCallback((id = null) => {
    setActive((prev) => !prev);
    setSelectedId(id);
  }, []);

  return (
    <CrudListPage
      title="Authors"
      path="authors"
      detailsPath="authors"
      items={items}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleSearch={handleSearch}
      handleDelete={handleDelete}
      active={active}
      toggleDetails={toggleDetails}
      selectedId={selectedId}
      currentPage={currentPage}
      totalPages={totalPages}
      paginate={setCurrentPage}
      message={message}
      loading={loading}
    />
  );
};

export default Authors;
