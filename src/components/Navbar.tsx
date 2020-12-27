import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div>
        <nav>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/wiki">Wiki</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
