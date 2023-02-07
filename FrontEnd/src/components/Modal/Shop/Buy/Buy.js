import React, { useRef, useState } from "react";
import {
  ModalWrap,
  Wrap,
  Title,
  Content,
  LastBtn,
  BtnWrap,
  ContentWrap,
} from "../../ModalStyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "redux/middleware/shopAction";
const Buy = ({ closeModal, setModal, data }) => {
  const [totalPrice, setTotalPrice] = useState(data);
  const userData = useSelector((state) => state.login);
  const usingPoint = useRef();
  const dispatch = useDispatch();
  const buyData = useSelector((state) => state.buying);
  const useTotalPoint = () => {
    if (userData.point > data) {
      usingPoint.current.value = data;
      setTotalPrice(0);
    } else {
      usingPoint.current.value = userData.point;
      setTotalPrice(data - usingPoint.current.value);
    }
  };
  const usePoint = () => {
    if (
      usingPoint.current.value > userData.point ||
      usingPoint.current.value < 0 ||
      +usingPoint.current.value > data
    ) {
      alert("알맞는 포인트를 입력하세요");
      usingPoint.current.value = 0;
      setTotalPrice(data);
    } else {
      setTotalPrice(data - usingPoint.current.value);
    }
  };
  const BUY = () => {
    if (buyData[0]) {
      dispatch(
        shopAction.buyingData([
          { ...buyData },
          { point: usingPoint.current.value, totalPrice },
        ])
      ).then(() => {
        dispatch(shopAction.getCartData(userData.user_id));
      });
    } else {
      alert("구매할 물건을 선택해주세요.");
    }
    setModal(false);
  };
  return (
    <ModalWrap onClick={closeModal}>
      <Wrap>
        <Title>TO BUY</Title>
        <Content>
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
            <div style={{ display: "flex" }}>
              <ContentWrap>총 금액 : {totalPrice}원</ContentWrap>
            </div>
          </div>
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

export default Buy;
