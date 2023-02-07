import React from "react";
import { MiniNavWrap } from "../ModalStyledComponents";
const MyPageMiniNav = ({ text, index, setIndex, idx }) => {
  const moveNav = (e) => {
    setIndex(idx);
  };
  return (
    <MiniNavWrap
      onClick={moveNav}
      style={{
        color: idx === index ? "green" : "",
        fontWeight: idx === index ? "bold" : "",
        backgroundColor: idx === index ? "white" : "",
        border: idx === index ? "2px solid black" : "",
      }}
    >
      {text}
    </MiniNavWrap>
  );
};

export default MyPageMiniNav;
