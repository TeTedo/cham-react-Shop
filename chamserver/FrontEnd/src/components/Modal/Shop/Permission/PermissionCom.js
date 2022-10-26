import React from "react";
import { useDispatch } from "react-redux";
import { PermissionArgWrap, PermissionSpan } from "../../ModalStyledComponents";
import { shopAction } from "../../../../redux/middleware/shopAction";
const PermissionCom = ({ data }) => {
  const dispatch = useDispatch();
  const result = (e) => {
    dispatch(shopAction.permissionAction(e.target.textContent, data.id));
  };
  return (
    <PermissionArgWrap>
      <PermissionSpan>{data.name}</PermissionSpan>
      <PermissionSpan>{data.introduction}</PermissionSpan>
      <PermissionSpan>{data.price}</PermissionSpan>
      <PermissionSpan>
        <img
          src={data.image}
          alt=""
          style={{ width: "50px", height: "50px", marginLeft: "15px" }}
        />
      </PermissionSpan>
      <PermissionSpan>{data.category}</PermissionSpan>
      <button onClick={result}>승인</button>
      <button onClick={result}>거절</button>
    </PermissionArgWrap>
  );
};

export default PermissionCom;
