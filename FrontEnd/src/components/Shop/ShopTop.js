import React from "react";
import ShopGoods from "../Pagination/Shop/ShopGoods";
import Pagination from "../Pagination/Shop/Pagination";
const ShopTop = ({ shopData }) => {
  shopData = Object.values(shopData).filter((v) => v.category === "TOP");
  return (
    <>
      <Pagination component={ShopGoods} shopData={shopData} />
    </>
  );
};

export default ShopTop;
