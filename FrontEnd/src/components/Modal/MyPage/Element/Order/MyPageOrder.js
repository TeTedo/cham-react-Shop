import React, { createContext, useEffect, useState } from "react";
import { WholeWrap, Nav, ComponentSpan } from "../MyPageStyledComponents";
import MyPagePagination from "../MyPagePagination";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "redux/middleware/shopAction";
import { loginAction } from "redux/middleware/loginAction";
import MyPageOrderCom from "./MyPageOrderCom";
const MyPageOrder = () => {
  const dispatch = useDispatch();
  const buyData = useSelector((state) => state.shopOrder);
  const user_id = useSelector((state) => state.login.user_id);
  useEffect(() => {
    dispatch(loginAction.loginCheck()).then(() => {
      dispatch(shopAction.boughtData(user_id));
    });
  }, []);

  return (
    <WholeWrap>
      <Nav>
        <ComponentSpan>이미지</ComponentSpan>
        <ComponentSpan>이름</ComponentSpan>
        <ComponentSpan>수량</ComponentSpan>
        <ComponentSpan>가격</ComponentSpan>
        <ComponentSpan>리뷰</ComponentSpan>
      </Nav>

      <MyPagePagination
        data={buyData ? buyData : {}}
        component={MyPageOrderCom}
      ></MyPagePagination>
    </WholeWrap>
  );
};

export default MyPageOrder;
