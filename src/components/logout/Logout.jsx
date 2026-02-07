import React from 'react';
import "./logout.css";

const Logout = ({onLogout}) => {
  return (
    <div className="logout-msg rounded-2 position-absolute">
    <div className="msg text-center">
        <p className="text-white rounded-2 fw-bold" onClick={onLogout }>
            Logout
        </p>
    </div>
    </div>
  )
}

export default Logout;