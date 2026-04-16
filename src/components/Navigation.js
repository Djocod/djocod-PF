import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="navBar hero-style">
      <li className="item-nav">
        <NavLink to="/Home">Dashboard</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
