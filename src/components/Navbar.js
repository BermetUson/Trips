import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trips</h1>

      <ul className="nav-menu">
        <li>
          <a href="/">
            <i className="fa-solid fa-house-user"></i>Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
