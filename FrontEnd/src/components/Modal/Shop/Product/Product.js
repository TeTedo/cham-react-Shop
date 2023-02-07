import React, { useEffect, useState } from "react";
import { ModalWrap, Title } from "../../ModalStyledComponents";
import {
  ProductionWrap,
  ProductionContent,
  ContentDiv,
  ProductionImg,
  Review,
  Price,
  Grade,
  BtnWrap,
  ReviewPage,
  ReviewWrap,
  ReviewProfile,
  ReviewText,
  ReviewPageSpan,
  ViewBtn,
} from "./ProductStyledComponent";
import { useDispatch, useSelector } from "react-redux";
import Modal_btn from "components/Modal/Modal_btn";
import { shopAction } from "redux/middleware/shopAction";
const Product = ({ closeModal, setModal, data }) => {
  const dispatch = useDispatch();
  const productionState = useSelector((state) => state.productionData);
  const productionData = [...productionState];
  const [index, setIndex] = useState(0);
  const length = Math.ceil(productionData.length / 5);
  const userData = useSelector((state) => state.login);
  const [viewReview, setViewReview] = useState(false);
  useEffect(() => {
    dispatch(shopAction.getProductionData(data));
  }, []);
  return (
    <ModalWrap onClick={closeModal}>
      <ProductionWrap>
        <Title>PRODUCTION</Title>
        <ProductionContent>
          <ContentDiv>
            <ProductionImg src={data.image} />
          </ContentDiv>
          <ContentDiv>
            {viewReview ? (
              <>
                <Review>
                  {productionData
                    .reverse()
                    .map((v, idx) => (
                      <ReviewWrap key={idx}>
                        <ReviewProfile src={v.profile_img} />
                        <ReviewText>{v.review}</ReviewText>
                      </ReviewWrap>
                    ))
                    .slice(index * 5, (index + 1) * 5)}
                </Review>
                <ReviewPage>
                  {new Array(length).fill(0).map((v, idx) => (
                    <ReviewPageSpan
                      key={idx}
                      onClick={() => {
                        setIndex(idx);
                      }}
                      style={{
                        color: idx === index ? "green" : "",
                        fontWeight: idx === index ? "bold" : "",
                        fontSize: idx === index ? "25px" : "",
                      }}
                    >
                      {idx + 1}
                    </ReviewPageSpan>
                  ))}
                </ReviewPage>
              </>
            ) : (
              <>
                <Review>{data.introduction}</Review>
                <ReviewPage></ReviewPage>
              </>
            )}

            <Grade>
              {new Array(5).fill(0).map((v, idx) => (
                <i
                  className={
                    idx <= Math.round(+data.grade) - 1
                      ? "fa-solid fa-star fa-bounce"
                      : "fa-regular fa-star"
                  }
                  key={idx}
                />
              ))}
              ({(+data.grade).toFixed(1)}/5)
              {viewReview ? (
                <ViewBtn
                  onClick={() => {
                    setViewReview(false);
                  }}
                >
                  설명 보기
                </ViewBtn>
              ) : (
                <ViewBtn
                  onClick={() => {
                    setViewReview(true);
                  }}
                >
                  리뷰보기({productionData.length})
                </ViewBtn>
              )}
            </Grade>
            <Price>{data.price}원</Price>
            {userData.user_id && (
              <BtnWrap>
                <Modal_btn
                  text="CART"
                  data={data}
                  className="fa-solid fa-cart-shopping"
                />
                <Modal_btn
                  text="BUY"
                  data={data}
                  className="fa-solid fa-money-check-dollar"
                />
              </BtnWrap>
            )}
          </ContentDiv>
        </ProductionContent>
      </ProductionWrap>
    </ModalWrap>
  );
};

export default Product;
