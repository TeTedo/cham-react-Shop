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
import PermissionCheckCom from "./PermissionCheckCom";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "../../../../redux/middleware/shopAction";
import { loginAction } from "../../../../redux/middleware/loginAction";
const PermissionCheck = ({ closeModal, setModal }) => {
  const [index, setIndex] = useState(0);
  // 전체 개수

  // 페이지당 개수
  const num = 10;
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.login.user_id);
  useEffect(() => {
    dispatch(loginAction.loginCheck()).then(() => {
      dispatch(shopAction.getPermissionCheck(user_id));
    });
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
            .slice(index * num, index * num + num)
            .map((v, idx) => (
              <PermissionCheckCom
                key={idx}
                data={permissionData[idx]}
              ></PermissionCheckCom>
            ))}
          <PermissionPagination
            index={index}
            pageLength={Math.ceil(dataLength / 10)}
            setIndex={setIndex}
          ></PermissionPagination>
        </PermissionContent>
      </PermissionWrap>
    </ModalWrap>
  );
};

export default PermissionCheck;
