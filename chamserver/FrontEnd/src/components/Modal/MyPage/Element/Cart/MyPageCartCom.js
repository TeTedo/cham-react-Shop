import React, { useContext, useEffect, useRef, useState } from "react";
import {
  ComponentWrap,
  ComponentSpan,
  Img,
  NumCount,
} from "../MyPageStyledComponents";
import { BuyContext } from "../../MyPageModal";
import { useDispatch, useSelector } from "react-redux";
const MyPageCartCom = ({ data }) => {
  const dispatch = useDispatch();
  const [num, setNum] = useState(data.num);
  const minus = () => {
    if (num !== 0) setNum(num - 1);
  };
  const plus = () => {
    setNum(num + 1);
  };
  const count = useRef();
  const { buyConfirm } = useContext(BuyContext);
  const user_id = useSelector((state) => state.login.user_id);
  useEffect(() => {
    if (buyConfirm && num !== 0) {
      dispatch({
        type: "SHOPBUY",
        payload: { shop_id: data.shop_id, num, user_id },
      });
    }
  }, [buyConfirm]);

  return (
    <ComponentWrap>
      <ComponentSpan>
        <Img src={data["ShopList.image"]} />
      </ComponentSpan>
      <ComponentSpan>{data["ShopList.name"]}</ComponentSpan>
      <ComponentSpan ref={count}>
        <NumCount onClick={minus}>-</NumCount>
        {num}
        <NumCount onClick={plus}>+</NumCount>
      </ComponentSpan>
      <ComponentSpan>{data["ShopList.price"] * num}원</ComponentSpan>
    </ComponentWrap>
  );
};

export default MyPageCartCom;
