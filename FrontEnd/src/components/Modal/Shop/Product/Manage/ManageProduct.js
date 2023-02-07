import React, { useEffect, useState } from "react";
import {
  ModalWrap,
  Title,
  PermissionWrap,
  PermissionContent,
  PermissionInfo,
  PermissionInfoSpan,
} from "../../../ModalStyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "redux/middleware/shopAction";
import ManageProductCom from "./ManageProductCom";
const ManageProduct = ({ closeModal, setModal }) => {
  const [index, setIndex] = useState(0);
  // 전체 개수
  // 페이지당 개수
  const num = 5;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(shopAction.getShopData());
  }, []);
  const shopData = useSelector((state) => state.shopData);
  const dataLength = Object.keys(shopData).length;
  return (
    <ModalWrap onClick={closeModal}>
      <PermissionWrap>
        <Title>MANAGE PRODUCT</Title>
        <PermissionContent>
          <PermissionInfo style={{ marginLeft: "90px" }}>
            <PermissionInfoSpan>이미지</PermissionInfoSpan>
            <PermissionInfoSpan>이름</PermissionInfoSpan>
            <PermissionInfoSpan>설명</PermissionInfoSpan>
            <PermissionInfoSpan>가격</PermissionInfoSpan>
          </PermissionInfo>
          {new Array(dataLength)
            .fill(0)
            .slice(index * num, index * num + num)
            .map((v, idx) => (
              <ManageProductCom key={idx} data={shopData[idx]} />
            ))}
        </PermissionContent>
      </PermissionWrap>
    </ModalWrap>
  );
};

export default ManageProduct;
