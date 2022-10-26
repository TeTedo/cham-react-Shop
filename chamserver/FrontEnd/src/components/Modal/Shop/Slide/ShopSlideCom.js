import React from "react";
import { useDispatch } from "react-redux";
import { PermissionArgWrap, PermissionSpan } from "../../ModalStyledComponents";
import { shopAction } from "../../../../redux/middleware/shopAction";
const ShopSlideCom = ({ data }) => {
  const dispatch = useDispatch();
  const result = (e) => {
    dispatch(shopAction.deleteSlideData(data["ShopList.id"])).then(() => {
      dispatch(shopAction.getShopData());
    });
  };
  return (
    <PermissionArgWrap>
      <PermissionSpan>{data["ShopList.name"]}</PermissionSpan>
      <PermissionSpan>{data["ShopList.introduction"]}</PermissionSpan>
      <PermissionSpan>{data["ShopList.price"]}</PermissionSpan>
      <PermissionSpan>
        <img
          src={data.backgroundImg}
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
      </PermissionSpan>
      <PermissionSpan>
        <img
          src={data["ShopList.image"]}
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
      </PermissionSpan>
      <button onClick={result}>삭제</button>
    </PermissionArgWrap>
  );
};

export default ShopSlideCom;
