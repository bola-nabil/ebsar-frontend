import React from 'react';
import "./logout.css";

const Logout = ({onLogout}) => {
  return (
    <div className="logout-msg rounded-2 position-absolute">
    <div className="msg text-center">
        <button className="text-white rounded-2 fw-bold bg-primary p-2 rounded-2 border-0" onClick={onLogout }>
            Logout
        </button>
    </div>
    </div>
  )
}

export default Logout;