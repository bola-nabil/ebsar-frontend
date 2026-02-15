import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks";
import AppLogo from "assets/images/app-logo.avif";
import "./navbar.css";

const NavBar = ({ menuOpen, setMenuOpen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleActive = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="text-white position-fixed top-0 start-0">
      <div className="logo center-row">
        <div>
          <img
            src={AppLogo}
            alt="ebsar logo"
            width="60"
            height="60"
            className="bg-white rounded-circle object-fit-cover"
            decoding="async"
            fetchpriority="high"
          />
          <h2 className="fw-medium fs-5 text-white">Ebsar</h2>
        </div>
        {isMobile && (
          <div className="menu-bars fs-4" onClick={handleActive}>
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </div>
        )}
      </div>
      {(menuOpen || !isMobile) && <NavLinks setMenuOpen={setMenuOpen} />}
    </header>
  );
};

export default NavBar;
