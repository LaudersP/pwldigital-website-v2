import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Desktop and Tablet Version */}
      <div className="navbar desktop-navbar">
        <nav className="navbar-content">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/workshop"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Workshop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/socials"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Socials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appearances"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Appearances
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Version */}
      <div className="navbar mobile-navbar">
        <div className="mobile-navbar-header">
          <div className="logo">PWL - Digital</div>
          <span
            class="material-symbols-outlined"
            id="menu-icon"
            onClick={toggleMenu}
          >
            {menuOpen ? "close" : "menu"}
          </span>
        </div>
        {menuOpen && (
          <div className="mobile-dropdown">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={toggleMenu}
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={toggleMenu}
                >
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/workshop"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={toggleMenu}
                >
                  Workshop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/socials"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={toggleMenu}
                >
                  Socials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/appearances"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={toggleMenu}
                >
                  Appearances
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
