import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            ManbaSrapt
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
              <NavLink
                exact
                to="/novedades"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Novedades
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Pelis
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/series"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Series
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/documentales"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Docus
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/varios"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Varios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;