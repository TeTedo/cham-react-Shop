import React from "react";
import "../../styles/MiniNavBar/MiniNavBar.css";
import { Link, useLocation } from "react-router-dom";

const MiniNavBar_menu = ({ path, name }) => {
  const location = useLocation();
  return (
    <Link to={path} className={location.pathname === path ? "miniMenu picked" : "miniMenu"}>
      <div className="miniNav_menu">{name}</div>
    </Link>
  );
};

export default MiniNavBar_menu;
