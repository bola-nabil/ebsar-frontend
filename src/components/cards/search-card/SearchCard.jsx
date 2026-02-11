import {memo} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search-card.css";

const SearchCard = ({searchTerm, setSearchTerm, handleSearch}) => {
    const handleChange = (e) => setSearchTerm(e.target.value);
  return (
    <div className="search-card center-row text-white">
        <input
          type="text"
          className="fw-bold rounded-4 w-75"
          value={searchTerm}
          placeholder="Search...."
          onChange={handleChange}
        />
        <button onClick={handleSearch} 
            className="search rounded-2 border-0" 
            type='button' 
            aria-label='Search'
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
    </div>
  )
}

export default memo(SearchCard);