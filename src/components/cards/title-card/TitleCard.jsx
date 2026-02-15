import { memo } from "react";
import { Link } from "react-router-dom";
import "./title-card.css";

const TitleCard = ({ title, pathCard, titleCard }) => {
  return (
    <div className="title-card-root position-fixed">
      <div className="title-card-content">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="btn">
          <Link
            to={pathCard}
            aria-label={titleCard}
            className="fw-medium text-decoration-none p-3 text-white rounded-3"
          >
            {titleCard}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(TitleCard);
