import React from "react";
import Loading from "../loading/Loading";
import Paginate from "../Paginate";
import HeaderCard from "../cards/HeaderCard";
import BoxCard from "../cards/BoxCard";
import DetailsCard from "../cards/DetailsCard";
import ErrorMessage from "../errors/ErrorMessage";
import PageTitle from "../PageTitle";

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

        <Paginate
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      </div>
    </div>
  );
};
export default CrudListPage;
