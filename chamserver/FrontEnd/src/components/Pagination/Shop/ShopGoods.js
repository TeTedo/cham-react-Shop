import React, { useState } from "react";
import { Wrap, Img, Div, Span } from "../Pagination_styledComponents";
import Modal_btn from "components/Modal/Modal_btn";
import { useSelector } from "react-redux";

const ShopGoods = ({ shopData, change }) => {
  const [enter, setEnter] = useState(false);
  const enterCheck = (e) => {
    e._reactName === "onMouseEnter" ? setEnter(true) : setEnter(false);
  };
  const grade = +shopData.grade;
  const userData = useSelector((state) => state.login);
  return (
    <>
      <Wrap onMouseEnter={enterCheck} onMouseLeave={enterCheck}>
        {enter ? (
          change ? (
            // 9개일때 마우스엔터
            <>
              <Span>{shopData.price}원</Span>
              <Modal_btn
                text="상세 페이지 보기"
                className="fa-solid fa-magnifying-glass"
                data={shopData}
              />
              {userData.user_id && (
                <Span>
                  <Modal_btn
                    text="CART"
                    className="fa-solid fa-cart-shopping"
                    data={shopData}
                  />
                  <Modal_btn
                    text="BUY"
                    className="fa-solid fa-money-check-dollar"
                    data={shopData}
                  />
                </Span>
              )}
            </>
          ) : (
            //4개일때 엔터
            <>
              <Div>
                <i className="fa-solid fa-star">&nbsp;{grade.toFixed(1)}/5</i>
              </Div>
              <Span>{shopData.price}원</Span>
              <Modal_btn
                text="상세 페이지 보기"
                className="fa-solid fa-magnifying-glass"
                data={shopData}
              />
              <Span>
                <Modal_btn
                  text="CART"
                  className="fa-solid fa-cart-shopping"
                  data={shopData}
                />
                <Modal_btn
                  text="BUY"
                  className="fa-solid fa-money-check-dollar"
                  data={shopData}
                />
              </Span>
            </>
          )
        ) : (
          // 마우스 안올려놨을때
          <>
            <Img src={shopData.image} alt="이미지 오류" />
          </>
        )}
      </Wrap>
    </>
  );
};

export default ShopGoods;
