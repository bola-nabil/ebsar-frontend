import React from "react";
import { motion } from "framer-motion";
import { cardVariants, containerVariants } from "utilts/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dashboard-counts.css";

const DashboardCounts = ({ dashboardCounts }) => {
  return (
    <motion.div
      className="dashboard-counts"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {dashboardCounts.map((card) => (
        <motion.div
          className="dash-card bg-white rounded-4 center-row"
          key={card.id}
          variants={cardVariants}
          whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="card-icon text-white rounded-3">
            <FontAwesomeIcon icon={card.icon} />
          </div>
          <div className="card-info">
            <h3 className="fw-bold">{card.nums}</h3>
            <p>{card.title}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DashboardCounts;
