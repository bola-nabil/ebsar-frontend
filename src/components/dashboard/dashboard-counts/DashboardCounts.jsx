import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./dashboard-counts.css";

const DashboardCounts = ({dashboardCounts}) => {
  return (
          <div className="dashboard-counts">
            {dashboardCounts.map((card) => (
              <div
                className="dash-card bg-white rounded-4 center-row"
                key={card.id}
              >
                <div className="card-icon text-white rounded-3">
                  <FontAwesomeIcon icon={card.icon} />
                </div>
                <div className="card-info">
                  <h3 className="fw-bold">{card.nums}</h3>
                  <p>{card.title}</p>
                </div>
              </div>
            ))}
          </div>
    
  )
}

export default DashboardCounts;