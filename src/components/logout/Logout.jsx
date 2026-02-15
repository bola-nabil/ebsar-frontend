import React from "react";

const Logout = ({ onLogout }) => {
  return (
    <div className="msg text-center">
      <button
        className="text-white rounded-2 fw-bold bg-primary p-2 rounded-2 border-0"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
