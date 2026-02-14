import {memo} from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search-card.css";

const SearchCard = ({searchTerm, setSearchTerm, handleSearch}) => {
    const handleChange = (e) => setSearchTerm(e.target.value);
  return (
    <motion.div
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="search-card center-row text-white"
    >
        <motion.input
          type="text"
          className="fw-bold rounded-4 w-75"
          value={searchTerm}
          placeholder="Search...."
          onChange={handleChange}
          whileFocus={{ scale: 1.02, boxShadow: "0 0 8px rgba(255,255,255,0.5)" }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.button onClick={handleSearch} 
            className="search rounded-2 border-0" 
            type='button' 
            aria-label='Search'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </motion.button>
    </motion.div>
  )
}

export default memo(SearchCard);