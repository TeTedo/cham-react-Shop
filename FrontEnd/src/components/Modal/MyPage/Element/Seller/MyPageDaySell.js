import React, { useState } from "react";

import {
  WholeWrap,
  SellDataDiv,
  SellDiv,
  SellDivReverse,
  CallenderDayNav,
  CallenderDayNavSpan,
  CallenderSellWrap,
  CallenderSell,
  CallenderSellImg,
  CallenderPagination,
  CallenderPaginationSpan,
} from "../MyPageStyledComponents";
const MyPageDaySell = ({ dayData, month, year, date }) => {
  const [index, setIndex] = useState(0);
  const totalPrice = dayData
    .map((v) => +v["ShopBuys.num"] * +v.price)
    .reduce((acc, cur) => acc + cur, 0);
  const pageLength = Math.ceil(dayData.length / 7);
  const data = [...dayData].sort(
    (a, b) =>
      new Date(a["ShopBuys.createdAt"]) - new Date(b["ShopBuys.createdAt"])
  );
  return (
    <WholeWrap>
      <SellDataDiv>
        <SellDiv>
          {year}년 {month}월 {date}일
        </SellDiv>
        <SellDivReverse>{totalPrice}원</SellDivReverse>
        <CallenderDayNav>
          <CallenderDayNavSpan>상품</CallenderDayNavSpan>
          <CallenderDayNavSpan>이름</CallenderDayNavSpan>
          <CallenderDayNavSpan>수량</CallenderDayNavSpan>
          <CallenderDayNavSpan>가격</CallenderDayNavSpan>
        </CallenderDayNav>
        {data
          .map((v, idx) => (
            <CallenderSellWrap key={idx}>
              <CallenderSell>
                <CallenderSellImg src={v.image} />
              </CallenderSell>
              <CallenderSell>{v.name}</CallenderSell>
              <CallenderSell>{v["ShopBuys.num"]}</CallenderSell>
              <CallenderSell>{v["ShopBuys.num"] * v.price}</CallenderSell>
            </CallenderSellWrap>
          ))
          .reverse()
          .slice(index * 7, (index + 1) * 7)}
        <CallenderPagination>
          {new Array(pageLength).fill(0).map((v, idx) => (
            <CallenderPaginationSpan
              key={idx}
              onClick={() => {
                setIndex(idx);
              }}
              style={{
                color: index === idx ? "green" : "black",
                fontSize: index === idx ? "25px" : "",
                cursor: "pointer",
              }}
            >
              {idx + 1}
            </CallenderPaginationSpan>
          ))}
        </CallenderPagination>
      </SellDataDiv>
    </WholeWrap>
  );
};

export default MyPageDaySell;
