import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar-container">
      <ul className="navBar-ul">
        <li className="items-navBar">
          <NavLink to="/">Acceuil</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
