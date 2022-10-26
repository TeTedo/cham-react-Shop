import React from "react";
import { useDispatch } from "react-redux";
import {
  PermissionArgWrap,
  PermissionSpan,
} from "../../../ModalStyledComponents";
import { shopAction } from "redux/middleware/shopAction";
const ManageProductCom = ({ data }) => {
  const dispatch = useDispatch();
  const result = (e) => {
    dispatch(shopAction.manageProduct(data.id));
  };
  return (
    <PermissionArgWrap>
      <PermissionSpan>
        <img
          src={data.image}
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
      </PermissionSpan>
      <PermissionSpan>{data.name}</PermissionSpan>
      <PermissionSpan>{data.introduction}</PermissionSpan>
      <PermissionSpan>{data.price}</PermissionSpan>
      <button onClick={result}>삭제</button>
    </PermissionArgWrap>
  );
};

export default ManageProductCom;
