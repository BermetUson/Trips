import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trips</h1>

      <ul className="nav-menu">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href="/" className={item.cName}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
