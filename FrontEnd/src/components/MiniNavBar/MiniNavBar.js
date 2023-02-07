import React from "react";
import MiniNavBar_menu from "./MiniNavBar_menu";
import { Wrapper } from "./MiniNavBar_styledComponents";
const MiniNavBar = ({ page, name }) => {
  return (
    <Wrapper>
      {page.map((v, index) => (
        <MiniNavBar_menu path={v} name={name[index]} key={index}></MiniNavBar_menu>
      ))}
    </Wrapper>
  );
};

export default MiniNavBar;
