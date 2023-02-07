import React, { useEffect, useState } from "react";
import {
  ModalWrap,
  Title,
  PermissionWrap,
  PermissionContent,
  PermissionInfo,
  PermissionInfoSpan,
} from "../../ModalStyledComponents";
import PermissionPagination from "./PermissionPagination";
import PermissionCom from "./PermissionCom";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "../../../../redux/middleware/shopAction";
const Permission = ({ closeModal, setModal }) => {
  const [index, setIndex] = useState(0);
  // 전체 개수

  // 페이지당 개수
  const num = 5;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(shopAction.getPermissionData());
  }, []);
  const permissionData = useSelector((state) => state.shopPermission);
  const dataLength = Object.keys(permissionData).length;

  return (
    <ModalWrap onClick={closeModal}>
      <PermissionWrap>
        <Title>Permission</Title>
        <PermissionContent>
          <PermissionInfo>
            <PermissionInfoSpan>이름</PermissionInfoSpan>
            <PermissionInfoSpan>설명</PermissionInfoSpan>
            <PermissionInfoSpan>가격</PermissionInfoSpan>
            <PermissionInfoSpan>이미지</PermissionInfoSpan>
            <PermissionInfoSpan>카테고리</PermissionInfoSpan>
          </PermissionInfo>
          {new Array(dataLength)
            .fill(0)
            .map((v, idx) => (
              <PermissionCom
                key={idx}
                data={permissionData[idx]}
              ></PermissionCom>
            ))
            .slice(index * num, index * num + num)}
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

export default Permission;
