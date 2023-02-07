import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "redux/middleware/shopAction";
import { loginAction } from "redux/middleware/loginAction";
import MyPageCalender from "./MyPageCalender";
import {
  WholeWrap,
  SellDataDiv,
  SellDiv,
  SellDivReverse,
} from "../MyPageStyledComponents";
const MyPageSeller = ({
  setMove,
  setDayData,
  month,
  setMonth,
  year,
  setYear,
  setDate,
}) => {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.login.user_id);

  const [totalPrice, setTotalPrice] = useState(0);
  const [monthPrice, setMonthPrice] = useState(0);
  useEffect(() => {
    dispatch(loginAction.loginCheck()).then(() => {
      dispatch(shopAction.getTotalSellData(user_id));
    });
    const date = new Date();
    setYear(date.getFullYear());
    setMonth(date.getMonth() + 1);
  }, []);
  return (
    <>
      <WholeWrap>
        <SellDataDiv>
          <SellDiv>총 판매금액</SellDiv>
          <SellDivReverse>{totalPrice}원</SellDivReverse>
        </SellDataDiv>
        <SellDataDiv>
          <SellDiv>
            {year}년 {month}월 판매금액
          </SellDiv>
          <SellDivReverse>{monthPrice}원</SellDivReverse>
        </SellDataDiv>
        <MyPageCalender
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          setMonthPrice={setMonthPrice}
          setTotalPrice={setTotalPrice}
          setDayData={setDayData}
          setMove={setMove}
          setDate={setDate}
        ></MyPageCalender>
      </WholeWrap>
    </>
  );
};

export default MyPageSeller;
