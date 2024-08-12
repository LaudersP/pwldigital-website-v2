import React from "react";
import "./NavBar.css";

import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
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
  );
}

export default NavBar;
