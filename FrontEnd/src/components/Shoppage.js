import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "../redux/middleware/shopAction";
import "../styles/Shop/Shop.css";
import MiniNavBar from "./MiniNavBar/MiniNavBar";
const Shoppage = ({ component: Component }) => {
  const page = ["/shop", "/shop/top", "/shop/bottom", "/shop/shoes"];
  const name = ["MAIN", "TOP", "BOTTOM", "SHOES"];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(shopAction.getShopData());
  }, []);
  const shopData = useSelector((state) => state.shopData);
  return (
    <div className="shopMain">
      <MiniNavBar page={page} name={name} />
      <Component shopData={shopData}></Component>
    </div>
  );
};

export default Shoppage;
