import React, { useEffect } from "react";
import { BuyBtn, Nav, ComponentSpan } from "../MyPageStyledComponents";
import MyPagePagination from "../MyPagePagination";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "redux/middleware/shopAction";
import { loginAction } from "redux/middleware/loginAction";
import MyPageCartCom from "./MyPageCartCom";
const MyPageCart = ({ setBuyConfirm, setTotalPrice }) => {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.login.user_id);
  useEffect(() => {
    dispatch(loginAction.loginCheck()).then(() => {
      dispatch(shopAction.getCartData(user_id));
    });
  }, []);
  const cartData = useSelector((state) => state.shopCart);
  const buyHandler = (e) => {
    e.preventDefault();
    const target = e.target.children[1].children;
    let totalPrice = 0;
    for (let i = 0; i < target.length; i++) {
      totalPrice += parseInt(target[i].children[0].children[3].textContent);
    }
    setTotalPrice(totalPrice);
    setBuyConfirm(true);
  };
  return (
    <form onSubmit={buyHandler} style={{ width: "100%", height: "100%" }}>
      <Nav>
        <ComponentSpan>이미지</ComponentSpan>
        <ComponentSpan>이름</ComponentSpan>
        <ComponentSpan>수량</ComponentSpan>
        <ComponentSpan>가격</ComponentSpan>
      </Nav>
      <MyPagePagination
        data={cartData ? cartData : {}}
        component={MyPageCartCom}
      ></MyPagePagination>
      <BuyBtn>Buy</BuyBtn>
    </form>
  );
};

export default MyPageCart;
