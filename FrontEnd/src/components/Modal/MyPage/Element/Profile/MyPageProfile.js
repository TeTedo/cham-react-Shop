import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "redux/middleware/loginAction";
import {
  Input,
  Preview,
  PreviewImg,
  BtnWrap,
  ProfileWrap,
} from "../MyPageStyledComponents";
import previewImg from "util/previewImg";
const MyPageProfile = ({
  setModify,
  setModifyData,
  setSeller,
  setSellerData,
}) => {
  const previewTarget = useRef();
  const uploadTarget = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginAction.loginCheck());
  }, []);
  const userData = useSelector((state) => state.login);
  const imgPreview = (e) => {
    previewImg(e.target, previewTarget.current);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    //이미지 저장할 formdata 설정
    const formData = new FormData();
    const config = { header: { "content-type": "multipart/form-data" } };
    formData.append("file", uploadTarget.current.files[0]);
    formData.append(
      "data",
      JSON.stringify({
        user_id: userData.user_id,
        nick_name: nick_name.current.value,
        mobile_number: mobile_number.current.value,
        address: address.current.value,
        email: email.current.value,
      })
    );
    setModifyData({ formData, config, user_id: userData.user_id });
    setModify(true);
  };
  const nick_name = useRef();
  const mobile_number = useRef();
  const address = useRef();
  const email = useRef();
  const applySeller = () => {
    setSellerData(userData.user_id);
    setSeller(true);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <ProfileWrap>
          ID
          <Input defaultValue={userData.user_id} readOnly name="user_id" />
        </ProfileWrap>
        <ProfileWrap>
          PROFILE IMAGE
          <Preview>
            <PreviewImg src={userData.profile_img} ref={previewTarget} />
          </Preview>
          <Input
            type="file"
            ref={uploadTarget}
            onChange={imgPreview}
            name="profile_img"
          />
        </ProfileWrap>
        <ProfileWrap>
          NAME
          <Input defaultValue={userData.name} readOnly />
        </ProfileWrap>
        <ProfileWrap>
          NICKNAME
          <Input defaultValue={userData.nick_name} ref={nick_name} />
        </ProfileWrap>
        <ProfileWrap>
          MOBILE NUMBER
          <Input defaultValue={userData.mobile_number} ref={mobile_number} />
        </ProfileWrap>
        <ProfileWrap>
          ADDRESS
          <Input defaultValue={userData.address} ref={address} />
        </ProfileWrap>
        <ProfileWrap>
          E-MAIL
          <Input defaultValue={userData.email} ref={email} />
        </ProfileWrap>
        <ProfileWrap>
          POINT
          <Input defaultValue={userData.point} readOnly />
        </ProfileWrap>
        <BtnWrap>수정하기</BtnWrap>
      </form>
      <BtnWrap onClick={applySeller}>판매자 신청</BtnWrap>
    </>
  );
};

export default MyPageProfile;
