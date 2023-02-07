import React from "react";
import { useSelector } from "react-redux";
import Modal_btn from "../Modal/Modal_btn";
const NavBar_login = () => {
  const loginStatus = useSelector((state) => state.login.status);
  const userData = useSelector((state) => state.login);
  const { profile_img } = userData;
  return (
    <div className="navBar_btns">
      {loginStatus ? (
        <>
          <img src={profile_img} className="navBar_btns_image" />
          <Modal_btn text="MY PAGE" className={"navBar_btns__"} />
          <Modal_btn text="LOGOUT" className={"navBar_btns__"} />
        </>
      ) : (
        <>
          <Modal_btn text="SIGN UP" className={"navBar_btns__"} />
          <Modal_btn text="LOGIN" className={"navBar_btns__"} />
        </>
      )}
    </div>
  );
};

export default NavBar_login;
