import React from "react";
import LoadingButton from "../loading-button/LoadingButton";
import "./submit-button.css";

const SubmitButton = ({ loading, content }) => {
  return (
    <div className="submit-btn center-row text-center">
      <button type="submit" className="rounded-3 border-0">
        {loading ? <LoadingButton /> : <p className="fw-bold">{content}</p>}
      </button>
    </div>
  );
};

export default SubmitButton;
