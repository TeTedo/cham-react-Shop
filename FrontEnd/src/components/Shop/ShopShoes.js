import React from "react";
import Pagination from "../Pagination/Shop/Pagination";
import ShopGoods from "../Pagination/Shop/ShopGoods";
const ShopShoes = ({ shopData }) => {
  shopData = Object.values(shopData).filter((v) => v.category === "SHOES");
  return (
    <>
      <Pagination component={ShopGoods} shopData={shopData} />
    </>
  );
};

export default ShopShoes;
