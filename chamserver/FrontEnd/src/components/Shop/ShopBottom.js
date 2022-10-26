import React from "react";
import Pagination from "../Pagination/Shop/Pagination";
import ShopGoods from "../Pagination/Shop/ShopGoods";
const ShopMain = ({ shopData }) => {
  shopData = Object.values(shopData).filter((v) => v.category === "BOTTOM");
  return (
    <>
      <Pagination component={ShopGoods} shopData={shopData} />
    </>
  );
};

export default ShopMain;
