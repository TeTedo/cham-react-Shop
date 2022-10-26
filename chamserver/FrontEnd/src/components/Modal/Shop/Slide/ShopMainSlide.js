import React, { useEffect, useState } from "react";
import {
  ModalWrap,
  Title,
  PermissionWrap,
  PermissionContent,
  PermissionInfo,
  PermissionInfoSpan,
} from "../../ModalStyledComponents";
import PermissionPagination from "../Permission/PermissionPagination";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "../../../../redux/middleware/shopAction";
import ShopSlideCom from "./ShopSlideCom";
import Modal from "../../Modal";
const ShopMainSlide = ({ closeModal, setModal }) => {
  const [index, setIndex] = useState(0);
  // 전체 개수
  // 페이지당 개수
  const num = 5;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(shopAction.getSlideData());
  }, []);
  const shopSlideData = useSelector((state) => state.shopSlide);
  const dataLength = Object.keys(shopSlideData).length;
  const [upLoad, setUpLoad] = useState(false);
  return (
    <ModalWrap onClick={closeModal}>
      <PermissionWrap>
        {upLoad ? <Modal type={"슬라이드추가"} setModal={setUpLoad} /> : ""}
        <Title>MANAGE SLIDE</Title>
        <PermissionContent>
          <PermissionInfo>
            <PermissionInfoSpan>이름</PermissionInfoSpan>
            <PermissionInfoSpan>설명</PermissionInfoSpan>
            <PermissionInfoSpan>가격</PermissionInfoSpan>
            <PermissionInfoSpan>배경</PermissionInfoSpan>
            <PermissionInfoSpan>이미지</PermissionInfoSpan>
            <button onClick={() => setUpLoad(true)} style={{ width: "50px" }}>
              추가
            </button>
          </PermissionInfo>
          {new Array(dataLength)
            .fill(0)
            .slice(index * num, index * num + num)
            .map((v, idx) => (
              <ShopSlideCom key={idx} data={shopSlideData[idx]}></ShopSlideCom>
            ))}
          <PermissionPagination
            index={index}
            pageLength={Math.ceil(dataLength / 5)}
            setIndex={setIndex}
          ></PermissionPagination>
        </PermissionContent>
      </PermissionWrap>
    </ModalWrap>
  );
};

export default ShopMainSlide;
