import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="items">
        <NavLink to="/celcius">celcius</NavLink>
      </div>
      <div className="items">
        <NavLink to="/farenheit">farenheit</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
