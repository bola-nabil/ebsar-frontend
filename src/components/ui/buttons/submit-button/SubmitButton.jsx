import { memo } from "react";
import { LoadingButton } from "..";
import "./submit-button.css";

const SubmitButton = ({ loading, content }) => {
  return (
    <div className="submit-btn center-row text-center">
      <button type="submit" className="rounded-3 border-0" disabled={loading}>
        {loading ? <LoadingButton /> : content}
      </button>
    </div>
  );
};

export default memo(SubmitButton);
