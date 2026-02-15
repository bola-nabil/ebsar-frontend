import React from "react";
import TitleCard from "../title-card/TitleCard";
import { SearchCard } from "..";
import "./header-card.css";

const HeaderCard = ({
  title,
  pathCard,
  titleCard,
  searchTerm,
  setSearchTerm,
  handleSearch,
}) => {
  return (
    <div className="header-card w-100">
      <TitleCard title={title} pathCard={pathCard} titleCard={titleCard} />
      <SearchCard
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
    </div>
  );
};

export default HeaderCard;
