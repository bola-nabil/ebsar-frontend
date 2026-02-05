import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./control-button.css";

const ControlsButtons = ({ cardPath, card, handleDelete }) => {
  return (
    <div className="card-controls w-100 d-flex justify-content-between align-items-end">
      <div className="edit-btn btn-style center-row text-white rounded-circle">
        <Link to={`/${cardPath}/${card.id}/edit`} aria-label="Edit">
          <FontAwesomeIcon icon={faPen} className="text-white" />
        </Link>
      </div>
      <div className="del-btn btn-style center-row bg-danger text-white rounded-circle">
        <div onClick={() => handleDelete(card.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </div>
  );
};

export default ControlsButtons;
