import React from "react";
import Loading from "../components/ui/loading/Loading";
import Pagination from "../components/pagination/Pagination";
import HeaderCard from "../components/cards/header-card/HeaderCard";
import BoxCard from "../components/cards/box-card/BoxCard";
import DetailsCard from "../components/cards/details-card/DetailsCard";
import ErrorMessage from "../components/ui/error/error-message/ErrorMessage";
import PageTitle from "../components/ui/PageTitle";

const CrudListPage = ({
  title,
  path,
  detailsPath,
  items,
  searchTerm,
  setSearchTerm,
  handleSearch,
  handleDelete,
  active,
  toggleDetails,
  selectedId,
  currentPage,
  totalPages,
  paginate,
  loading,
}) => {
  if (loading) return <Loading />;

  return (
    <div className="mobile-container edit-page">
      <PageTitle title={title} />

      <DetailsCard
        active={active}
        handleActive={toggleDetails}
        DetailsPath={detailsPath}
        cardId={selectedId}
      />

      <div className={active ? "active-foucs" : ""}>
        <HeaderCard
          title={title}
          pathCard={`/${path}/create`}
          titleCard="ADD"
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />

        {items.length === 0 ? (
          <ErrorMessage message={`No ${path} found`} />
        ) : (
          <BoxCard
            cards={items}
            cardPath={path}
            handleActive={toggleDetails}
            handleDelete={handleDelete}
          />
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      </div>
    </div>
  );
};
export default CrudListPage;
