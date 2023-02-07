import React, { useEffect, useRef, useState } from "react";
import {
  ModalWrap,
  Wrap,
  Title,
  Content,
  LastBtn,
  BtnWrap,
  LabelInput,
  LabelControl,
} from "../../ModalStyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "redux/middleware/shopAction";
const BuyConfirm = ({ closeModal, setModal, data }) => {
  const dispatch = useDispatch();
  const [num, stateNum] = useState(1);
  const [totalPrice, setTotalPrice] = useState(data.price * num);
  const usingPoint = useRef();
  const minusNum = () => {
    if (num !== 1) stateNum(num - 1);
  };
  const plusNum = () => stateNum(num + 1);
  const userData = useSelector((state) => state.login);
  useEffect(() => {
    setTotalPrice(data.price * num - usingPoint.current.value);
  }, [num]);
  const usePoint = () => {
    if (
      usingPoint.current.value > userData.point ||
      usingPoint.current.value < 0 ||
      +usingPoint.current.value > data.price
    ) {
      alert("알맞는 포인트를 입력하세요");
      usingPoint.current.value = 0;
      setTotalPrice(data.price);
    } else {
      setTotalPrice(data.price * num - usingPoint.current.value);
    }
  };
  const useTotalPoint = () => {
    if (userData.point > data.price) {
      usingPoint.current.value = data.price;
      setTotalPrice(0);
    } else {
      usingPoint.current.value = userData.point;
      setTotalPrice(data.price * num - usingPoint.current.value);
    }
  };
  const BUY = () => {
    if (!userData.user_id) {
      alert("로그인이 필요합니다.");
      return;
    }
    dispatch(
      shopAction.buyingData([
        {
          0: {
            shop_id: data.id,
            user_id: userData.user_id,
            num,
          },
        },
        { point: usingPoint.current.value, totalPrice },
      ])
    );

    setModal(false);
  };
  return (
    <ModalWrap onClick={closeModal}>
      <Wrap>
        <Title>TO BUY</Title>
        <Content>
          <div style={{ display: "flex" }}>
            <LabelControl onClick={minusNum}>-</LabelControl>
            <LabelInput>{num}</LabelInput>
            <LabelControl onClick={plusNum}>+</LabelControl>
          </div>
          <div>사용가능 포인트 : {userData.point}</div>
          <div>
            사용 포인트 :{" "}
            <input
              type="number"
              defaultValue="0"
              step="1000"
              style={{ width: "80px" }}
              ref={usingPoint}
              onChange={usePoint}
            />{" "}
            <button onClick={useTotalPoint}>전체사용</button>
          </div>
          <div>총 금액 : {totalPrice}원</div>
          <BtnWrap>
            <LastBtn onClick={BUY}>BUY</LastBtn>
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

export default BuyConfirm;
