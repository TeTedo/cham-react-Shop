import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ProductModal } from "pages/Shop";
const ShopSlideCom = ({ data }) => {
  const shopData = useSelector((state) => state.shopData);
  const { setProductModal, setProductData } = useContext(ProductModal);
  const product = () => {
    if (data) {
      setProductData(
        ...Object.values(shopData).filter((v) => v.id === data?.shop_id)
      );
      setProductModal(true);
    }
  };
  return (
    <div className="shop_slide_com">
      <div className="shop_slide_com_top">
        {data && (
          <img
            src={data["ShopList.image"]}
            alt=""
            onClick={product}
            style={{ cursor: "pointer" }}
          />
        )}
        {!data && <div>상품 준비중입니다</div>}
      </div>
    </div>
  );
};

export default ShopSlideCom;
