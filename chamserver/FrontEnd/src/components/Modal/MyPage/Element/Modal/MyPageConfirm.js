import React, { useRef } from "react";

import {
  ModalWrap,
  Wrap,
  Title,
  Content,
  Input,
  LastBtn,
} from "../../../ModalStyledComponents";
import { loginAction } from "redux/middleware/loginAction";
import { useDispatch } from "react-redux";
const MyPageConfirm = ({ closeModal, setModal, data }) => {
  const dispatch = useDispatch();
  const user_pw = useRef();
  const modifyProfile = () => {
    setModal(false);
    dispatch(
      loginAction.modifyInfo({ ...data, user_pw: user_pw.current.value })
    );
  };
  return (
    <ModalWrap onClick={closeModal}>
      <Wrap>
        <Title>CONFIRM PASSWORD</Title>
        <Content>
          <Input style={{ margin: "10px 20px" }} ref={user_pw} />
          <LastBtn onClick={modifyProfile}>MODIFY!!</LastBtn>
        </Content>
      </Wrap>
    </ModalWrap>
  );
};

export default MyPageConfirm;
