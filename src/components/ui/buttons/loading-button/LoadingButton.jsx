import {memo} from "react";
import PageTitle from "../../PageTitle";
import "./loading-button.css";

const LoadingButton = () => {
  return (
    <div className="loading-btn center-row" aria-busy={true} aria-label="Loading">
      <PageTitle title="Loading" />
      <div className="loading-style rounded-circle"></div>
    </div>
  );
};

export default memo(LoadingButton);
