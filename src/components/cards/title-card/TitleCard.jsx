import {memo} from "react";
import { Link } from "react-router-dom";
import "./title-card.css";

const TitleCard = ({ title, pathCard, titleCard }) => {
  return(
    <div className="title-card d-flex align-items-center justify-content-between">
      <h2>{title}</h2>
      <div className="card-btn">
        <Link
          to={pathCard}
          aria-label={titleCard}
          className="fw-medium text-decoration-none p-3 text-white rounded-3"
        >
          {titleCard}
        </Link>
      </div>
    </div>
  )
};

export default memo(TitleCard);
