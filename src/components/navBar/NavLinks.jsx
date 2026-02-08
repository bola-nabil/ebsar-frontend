import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navLinks } from "utilts/navLinks";
import "./nav-links.css";

const NavLinks = ({ setMenuOpen }) => {
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
