import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TitleCard from "../title-card/TitleCard";
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
    <div className="header-card w-100 edit-page position-fixed top-0 start-0">
      <TitleCard title={title} pathCard={pathCard} titleCard={titleCard} />

      <div className="card-search center-row text-white">
        <input
          type="text"
          className="fw-bold rounded-4 w-75"
          value={searchTerm}
          placeholder="Search...."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div onClick={handleSearch} className="search rounded-2">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  );
};
export default HeaderCard;
