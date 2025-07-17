import React from "react";
import LoadingButton from "../loading/LoadingButton";

const SubmitButton = ({ loading, content }) => {
  return (
    <div className="submit-btn center-row text-center">
      <button type="submit" className="rounded-3">
        {loading ? <LoadingButton /> : <p className="fw-bold">{content}</p>}
      </button>
    </div>
  );
};

export default SubmitButton;
