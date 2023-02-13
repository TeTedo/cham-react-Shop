import axios from "axios";
import { loginAction } from "./loginAction";

const uploadGoodsToServer = (props) => {
  return async (dispatch, getState) => {
    const { formData, config } = props;
    await axios.post(`${process.env.URL}/shop/uploads`, formData, config);
  };
};
const uploadSlideToServer = (props) => {
  return async (dispatch, getState) => {
    const { formData, config } = props;
    const slideData = await axios.post(`${process.env.URL}/`, formData, config);
    dispatch({ type: "ADDSLIDE", payload: slideData.data });
  };
};
const getShopData = () => {
  return async (dispatch, getState) => {
    const goodsData = await axios.get(`${process.env.URL}/shop/data`);
    dispatch({ type: "SHOPDATA", payload: goodsData.data });
  };
};
const getPermissionData = () => {
  return async (dispatch, getState) => {
    const goodsData = await axios.get(`${process.env.URL}/shop/permission`);
    dispatch({ type: "PERMISSION", payload: goodsData.data });
  };
};
const getSlideData = () => {
  return async (dispatch, getState) => {
    const slideData = await axios.get(`${process.env.URL}/shop/slide`);
    dispatch({ type: "GETSLIDE", payload: slideData.data });
  };
};
const deleteSlideData = (props) => {
  return async (dispatch, getState) => {
    const slideData = await axios.post(`${process.env.URL}/shop/deleteSlide`, {
      id: props,
    });
    dispatch({ type: "GETSLIDE", payload: slideData.data });
  };
};
const getPermissionCheck = (user_id) => {
  return async (dispatch, getState) => {
    const goodsData = await axios.post(
      `${process.env.URL}/shop/permissionCheck`,
      {
        user_id,
      }
    );
    dispatch({ type: "PERMISSION", payload: goodsData.data });
  };
};

const permissionAction = (action, id) => {
  return async (dispatch, getState) => {
    const goodsData = await axios.post(`${process.env.URL}/shop/permission`, {
      type: action,
      id,
    });
    dispatch({ type: "PERMISSION", payload: goodsData.data });
  };
};

const addToCart = (data) => {
  return async (dispatch, getState) => {
    await axios.post(`${process.env.URL}/shop/cart`, { ...data });
    alert("장바구니에 추가되었습니다.");
  };
};
const getCartData = (user_id) => {
  return async (dispatch, getState) => {
    const cartData = await axios.post(`${process.env.URL}/shop/cartData`, {
      user_id,
    });
    dispatch({ type: "CART", payload: { ...cartData.data } });
  };
};
const buyingData = (data) => {
  return async (dispatch, getState) => {
    const cartData = await axios.post(`${process.env.URL}/shop/buyingData`, [
      ...data,
    ]);
    alert("구매가 완료되었습니다.");
    dispatch({ type: "CART", payload: { ...cartData.data } });
    dispatch(loginAction.loginCheck());
  };
};
const boughtData = (user_id) => {
  return async (dispatch, getState) => {
    const boughtData = await axios.post(`${process.env.URL}/shop/boughtData`, {
      user_id,
    });
    dispatch({ type: "SHOPBOUGHT", payload: { ...boughtData.data } });
  };
};
const writeReview = (data) => {
  return async (dispatch, getState) => {
    await axios.post(`${process.env.URL}/shop/writeReview`, {
      ...data,
    });
    alert("리뷰가 등록되었습니다.");
  };
};
const getProductionData = (data) => {
  return async (dispatch, getState) => {
    const productionData = await axios.post(
      `${process.env.URL}/shop/getProductionData`,
      {
        ...data,
      }
    );
    dispatch({ type: "SHOPPRODUCTION", payload: [...productionData.data] });
  };
};
const getSellerData = () => {
  return async (dispatch, getState) => {
    const sellerData = await axios.get(`${process.env.URL}/shop/getSellerData`);
    dispatch({ type: "FINDAPPLYSELLER", payload: [...sellerData.data] });
  };
};
const resultSellerData = ({ user_id, result }) => {
  return async (dispatch, getState) => {
    await axios.post(`${process.env.URL}/shop/resultSellerData`, {
      user_id,
      result,
    });
  };
};
const getTotalSellData = (user_id) => {
  return async (dispatch, getState) => {
    const totalSell = await axios.post(
      `${process.env.URL}/shop/getTotalSellData`,
      {
        user_id,
      }
    );
    dispatch({ type: "TOTALSELLDATA", payload: [...totalSell.data] });
  };
};
const manageProduct = (id) => {
  return async (dispatch, getState) => {
    const shop = await axios.post(`${process.env.URL}/shop/manageProduct`, {
      id,
    });
    dispatch({ type: "SHOPDATA", payload: { ...shop.data } });
  };
};
export const shopAction = {
  uploadGoodsToServer,
  getPermissionData,
  permissionAction,
  getPermissionCheck,
  getShopData,
  uploadSlideToServer,
  getSlideData,
  deleteSlideData,
  addToCart,
  getCartData,
  buyingData,
  boughtData,
  writeReview,
  getProductionData,
  getSellerData,
  resultSellerData,
  getTotalSellData,
  manageProduct,
};
