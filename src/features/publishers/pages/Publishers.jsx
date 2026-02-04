import React, { useState, useCallback } from "react";
import useCrudList from "../../../hooks/useCrudList";
import CrudListPage from "../../../pages/CrudListPage";

const Publishers = () => {
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
  } = useCrudList({ endpoint: "publishers" });

  const [active, setActive] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const toggleDetails = useCallback((id = null) => {
    setActive((prev) => !prev);
    setSelectedId(id);
  }, []);

  return (
    <CrudListPage
      title="Publishers"
      path="publishers"
      detailsPath="publishers"
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

export default Publishers;
