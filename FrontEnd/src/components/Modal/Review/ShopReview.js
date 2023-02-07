import React, { useRef, useState } from "react";
import {
  ModalWrap,
  Wrap,
  Title,
  Content,
  LastBtn,
  BtnWrap,
  Input,
  InputWrap,
} from "../ModalStyledComponents";
import { useDispatch } from "react-redux";
import { shopAction } from "redux/middleware/shopAction";
const ShopReview = ({ closeModal, setModal, data }) => {
  const dispatch = useDispatch();
  const reviewText = useRef();
  const [index, setIndex] = useState(0);
  const giveStar = (e) => {
    setIndex(e.target.dataset.index);
  };
  const makeReview = () => {
    const { user_id, id: review_id, shop_id } = data;
    const grade = +index + 1;
    const review = reviewText.current.value;
    dispatch(
      shopAction.writeReview({
        user_id,
        review_id,
        grade,
        review,
        shop_id,
      })
    ).then(() => {
      dispatch(shopAction.getShopData());
      dispatch(shopAction.boughtData(user_id));
    });
    setModal(false);
  };
  return (
    <ModalWrap onClick={closeModal}>
      <Wrap>
        <Title>REVIEW</Title>
        <Content>
          <InputWrap>
            {new Array(5).fill(0).map((v, idx) => (
              <i
                className={
                  idx <= index ? "fa-solid fa-star" : "fa-regular fa-star"
                }
                key={idx}
                style={{ cursor: "pointer" }}
                data-index={idx}
                onClick={giveStar}
              />
            ))}
          </InputWrap>
          <Input style={{ margin: "10px" }} ref={reviewText} />

          <BtnWrap>
            <LastBtn onClick={makeReview}>YES</LastBtn>
            <LastBtn
              onClick={() => {
                setModal(false);
              }}
            >
              No
            </LastBtn>
          </BtnWrap>
        </Content>
      </Wrap>
    </ModalWrap>
  );
};

export default ShopReview;
