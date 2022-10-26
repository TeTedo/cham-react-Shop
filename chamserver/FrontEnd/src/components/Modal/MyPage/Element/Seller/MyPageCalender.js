import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CallenderWrap,
  Callender,
  CallenderDay,
  CallenderMonth,
  CallenderPrice,
  CallenderUnit,
  CallenderDate,
} from "../MyPageStyledComponents";
const MyPageCalender = ({
  month,
  setMonth,
  year,
  setYear,
  setMonthPrice,
  setTotalPrice,
  setDayData,
  setMove,
  setDate,
}) => {
  const dispatch = useDispatch();
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const totalData = useSelector((state) => state.totalSellData);
  const user_id = useSelector((state) => state.login.user_id);
  const moveMonth = (e) => {
    if (e.target.className.includes("right")) {
      if (month === 12) {
        setYear(year + 1);
        setMonth(1);
      } else setMonth(month + 1);
    } else {
      if (month === 1) {
        setYear(year - 1);
        setMonth(12);
      } else setMonth(month - 1);
    }
  };
  useEffect(() => {
    setTotalPrice(
      totalData
        .map((v) => +v["ShopBuys.num"] * +v.price)
        .reduce((acc, cur) => acc + cur, 0)
    );
    setMonthPrice(
      monthData
        .map((v) => +v["ShopBuys.num"] * +v.price)
        .reduce((acc, cur) => acc + cur, 0)
    );
  }, [totalData, month]);
  const prevMonthDate = new Date(year, month - 1, 0).getDate();
  let prevMonthDay = new Date(year, month - 1, 0).getDay();
  prevMonthDay = prevMonthDay === 6 ? -1 : prevMonthDay;
  const currentMonthDate = new Date(year, month, 0).getDate();
  const monthData = totalData.filter(
    (v) =>
      month === new Date(v["ShopBuys.createdAt"]).getMonth() + 1 &&
      year === new Date(v["ShopBuys.createdAt"]).getFullYear()
  );
  const getSellData = (e) => {
    const date = +e.currentTarget.dataset.index + 1;
    setDate(date);
    const dayData = totalData.filter(
      (v) =>
        month === new Date(v["ShopBuys.createdAt"]).getMonth() + 1 &&
        year === new Date(v["ShopBuys.createdAt"]).getFullYear() &&
        date === new Date(v["ShopBuys.createdAt"]).getDate()
    );
    setDayData(dayData);
    setMove(true);
  };
  return (
    <CallenderWrap>
      <CallenderMonth>
        <i
          className="fa-solid fa-arrow-left fa-beat"
          style={{ marginRight: "15px", cursor: "pointer" }}
          onClick={moveMonth}
        ></i>
        {year}년 {month}월
        <i
          className="fa-solid fa-arrow-right fa-beat"
          style={{ marginLeft: "15px", cursor: "pointer" }}
          onClick={moveMonth}
        ></i>
        <CallenderUnit>단위 : 만원</CallenderUnit>
      </CallenderMonth>
      {day.map((v, idx) => (
        <CallenderDay key={idx}>{v}</CallenderDay>
      ))}
      {new Array(prevMonthDay + 1).fill(0).map((v, idx) => (
        <Callender key={idx} style={{ opacity: "0.5" }}>
          <CallenderDate
            style={{
              color: idx % 7 === 0 ? "red" : idx % 7 === 6 ? "blue" : "black",
            }}
          >
            {prevMonthDate - prevMonthDay + idx}
          </CallenderDate>
          <CallenderPrice></CallenderPrice>
        </Callender>
      ))}
      {new Array(currentMonthDate).fill(0).map((v, idx) => (
        <Callender
          key={idx}
          onClick={getSellData}
          style={{ cursor: "pointer" }}
          data-index={idx}
        >
          <CallenderDate
            style={{
              color:
                (idx + prevMonthDay + 1) % 7 === 0
                  ? "red"
                  : (idx + prevMonthDay + 1) % 7 === 6
                  ? "blue"
                  : "black",
            }}
          >
            {idx + 1}
          </CallenderDate>

          <CallenderPrice style={{ color: "green" }}>
            {(
              monthData
                .filter(
                  (v) => idx + 1 === new Date(v["ShopBuys.createdAt"]).getDate()
                )
                .map((v) => +v["ShopBuys.num"] * +v.price)
                .reduce((acc, cur) => acc + cur, 0) + ""
            ).slice(0, -4)}
          </CallenderPrice>
        </Callender>
      ))}
      {new Array(42 - currentMonthDate - prevMonthDay - 1)
        .fill(0)
        .map((v, idx) => (
          <Callender key={idx} style={{ opacity: "0.5" }}>
            <CallenderDate
              style={{
                color:
                  (currentMonthDate + prevMonthDay + 1 + idx) % 7 === 0
                    ? "red"
                    : (currentMonthDate + prevMonthDay + 1 + idx) % 7 === 6
                    ? "blue"
                    : "black",
              }}
            >
              {idx + 1}
            </CallenderDate>

            <CallenderPrice></CallenderPrice>
          </Callender>
        ))}
    </CallenderWrap>
  );
};

export default MyPageCalender;
