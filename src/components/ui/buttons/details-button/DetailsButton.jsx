import {memo} from "react";
import "./details-button.css";

const DetailsButton = ({ onClick, label = "See More"}, className = "", ...props) => {
  return (
    <div className="details-btn">
      <button
        type="button"
        onClick={onClick}
        className={`fw-medium fs-6 rounded-3 border-0 ${className}`}
        {...props}
      >
        {label}
      </button>
    </div>
  );
};

export default memo(DetailsButton);
