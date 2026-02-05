import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faUser,
  faUsers,
  faLock,
  faChartLine,
  faNewspaper,
  faList,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";
import "./nav-links.css";

const NavLinks = ({ setMenuOpen }) => {
  const navLinks = [
    { id: 1, title: "Dashboard", path: "/dashboard", icon: faChartLine },
    { id: 2, title: "Books", path: "/books", icon: faBook },
    { id: 3, title: "Authors", path: "/authors", icon: faFeather },
    { id: 4, title: "Publishers", path: "/publishers", icon: faUser },
    { id: 5, title: "Categories", path: "/categories", icon: faList },
    { id: 6, title: "Users", path: "/users", icon: faUsers },
    { id: 7, title: "Change Password", path: "/change-password", icon: faLock },
    { id: 8, title: "Privacy Policy", path: "/policy", icon: faNewspaper },
  ];

  const location = useLocation();

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header-content">
      <div className="nav-links d-flex justify-content-center align-items-start">
        <ul className="w-100">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                onClick={handleClick}
                className="text-decoration-none"
              >
                <div
                  className={`link d-flex align-items-center rounded-2 ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={link.icon} className="text-white" />
                  <p className="m-0">{link.title}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
