import React from "react";
import LoginModal from "./LoginAction/LoginModal";
import SignUpModal from "./SignUpModal/SignUpModal";
import LogoutModal from "./LoginAction/LogoutModal";
import UploadGoods from "./Shop/UploadGoods/UploadGoods";
import ShopMainSlide from "./Shop/Slide/ShopMainSlide";
import Permission from "./Shop/Permission/Permission";
import PermissionCheck from "./Shop/Permission/PermissionCheck";
import ShopSlideAdd from "./Shop/Slide/ShopSlideAdd";
import MyPageModal from "./MyPage/MyPageModal";
import MyPageConfirm from "./MyPage/Element/Modal/MyPageConfirm";
import CartConfirm from "./Shop/Cart.js/CartConfirm";
import BuyConfirm from "./Shop/Buy/BuyConfirm";
import Buy from "./Shop/Buy/Buy";
import ShopReview from "./Review/ShopReview";
import Product from "./Shop/Product/Product";
import ApplySeller from "./MyPage/Element/Modal/ApplySeller";
import ManageSeller from "./Shop/Seller/ManageSeller";
import ErrorModal from "./Error/ErrorModal";
import ManageProduct from "./Shop/Product/Manage/ManageProduct";
const Modal = ({ setModal, type, data }) => {
  const closeModal = (e) => {
    if (e.currentTarget === e.target) setModal(false);
  };
  switch (type) {
    case "SIGN UP":
      return <SignUpModal closeModal={closeModal} setModal={setModal} />;
    case "LOGIN":
      return <LoginModal closeModal={closeModal} setModal={setModal} />;
    case "LOGOUT":
      return <LogoutModal closeModal={closeModal} setModal={setModal} />;
    case "MY PAGE":
      return <MyPageModal closeModal={closeModal} setModal={setModal} />;
    case "물건올리기":
      return <UploadGoods closeModal={closeModal} setModal={setModal} />;
    case "슬라이드 관리":
      return <ShopMainSlide closeModal={closeModal} setModal={setModal} />;
    case "판매승인":
      return <Permission closeModal={closeModal} setModal={setModal} />;
    case "판매승인 확인":
      return <PermissionCheck closeModal={closeModal} setModal={setModal} />;
    case "슬라이드추가":
      return <ShopSlideAdd closeModal={closeModal} setModal={setModal} />;
    case "프로필수정확인":
      return (
        <MyPageConfirm
          data={data}
          closeModal={closeModal}
          setModal={setModal}
        />
      );

    case "CART":
      return (
        <CartConfirm closeModal={closeModal} setModal={setModal} data={data} />
      );
    case "BUY":
      return (
        <BuyConfirm closeModal={closeModal} setModal={setModal} data={data} />
      );
    case "장바구니물건구매":
      return <Buy closeModal={closeModal} setModal={setModal} data={data} />;
    case "SHOP리뷰작성":
      return (
        <ShopReview closeModal={closeModal} setModal={setModal} data={data} />
      );
    case "상세 페이지 보기":
      return (
        <Product closeModal={closeModal} setModal={setModal} data={data} />
      );
    case "판매자신청":
      return (
        <ApplySeller closeModal={closeModal} setModal={setModal} data={data} />
      );
    case "판매자신청 현황":
      return (
        <ManageSeller closeModal={closeModal} setModal={setModal} data={data} />
      );
    case "에러":
      return <ErrorModal closeModal={closeModal} setModal={setModal} />;
    case "판매물건관리":
      return <ManageProduct closeModal={closeModal} setModal={setModal} />;
    default:
      return;
  }
};

export default Modal;
