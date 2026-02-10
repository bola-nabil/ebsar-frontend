import { memo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faNewspaper } from "@fortawesome/free-solid-svg-icons";

import Logout from "components/logout/Logout";
import "./dashboard-nav.css";

const DASHBOARD_LINKS = [
  {
    id: 1,
    title: "Change Password",
    path: "/change-password",
    icon: faLock,
  },
  {
    id: 2,
    title: "Policy",
    path: "/policy",
    icon: faNewspaper,
  },
];

const DashboardNav = ({ onLogout }) => {
  return (
    <nav className="dashboard-nav rounded-2 position-absolute">
      <ul className="list-unstyled mb-3">
        {DASHBOARD_LINKS.map(({ id, title, path, icon }) => (
          <li key={id} className="mb-3 d-flex align-items-center gap-2">
            <FontAwesomeIcon icon={icon} className="text-primary" />
            <Link
              to={path}
              className="text-white text-decoration-none"
              aria-label={`Go to ${title}`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <Logout onLogout={onLogout} />
    </nav>
  );
};

export default memo(DashboardNav);
