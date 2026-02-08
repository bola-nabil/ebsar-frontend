import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./control-button.css";

const ControlsButtons = ({ cardPath, card, handleDelete, className = "", ...props }) => {
  return (
    <div className={`card-controls w-100 d-flex justify-content-between align-items-end ${className}`} {...props}>
      
      <Link
        to={`/${cardPath}/${card.id}/edit`}
        aria-label={`Edit ${card.name || card.title}`}
        className="edit-btn btn-style center-row text-white rounded-circle"
      >
        <FontAwesomeIcon icon={faPen} />
      </Link>

      <button
        type="button"
        onClick={() => handleDelete(card.id)}
        className="del-btn btn-style center-row bg-danger text-white rounded-circle border-0"
        aria-label={`Delete ${card.name || card.title}`}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>

    </div>
  );
};

export default memo(ControlsButtons);
