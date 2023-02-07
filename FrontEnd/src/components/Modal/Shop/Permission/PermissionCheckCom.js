import React from "react";
import { PermissionArgWrap, PermissionSpan } from "../../ModalStyledComponents";
const PermissionCheckCom = ({ data }) => {
  const result = () => {
    switch (data.permission) {
      case "N":
        return "심사중";
      case "Y":
        return "승인";
      case "D":
        return "거절";
      default:
        break;
    }
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
      <PermissionSpan>{result()}</PermissionSpan>
    </PermissionArgWrap>
  );
};

export default PermissionCheckCom;
