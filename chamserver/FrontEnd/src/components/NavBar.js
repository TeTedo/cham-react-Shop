import React from "react";
import "../styles/NavBar/NavBar.css";
import { NavBar_menu, NavBar_login } from "./NavBar/";
const NavBar = () => {
  return (
    <div className="navWrap">
      <NavBar_menu />
      <NavBar_login />
    </div>
  );
};

export default NavBar;
