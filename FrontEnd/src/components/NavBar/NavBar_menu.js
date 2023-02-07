import React from "react";
import NavBar_menu_com from "./NavBar_menu_com";
const NavBar_menu = () => {
  return (
    <div className="navBar_menu">
      <NavBar_menu_com path="/" name="HOME" />
      <NavBar_menu_com path="/shop" name="SHOP" />
      {/* <NavBar_menu_com path="/travel" name="TRAVEL" />
      <NavBar_menu_com path="/auction" name="AUCTION" />
      <NavBar_menu_com path="/game" name="GAME" /> */}
    </div>
  );
};

export default NavBar_menu;
