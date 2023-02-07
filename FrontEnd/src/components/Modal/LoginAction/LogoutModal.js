import React from "react";
import { ModalWrap, Wrap, Title, Content, LastBtn } from "../ModalStyledComponents";
import { useDispatch } from "react-redux";
const ModalBase = ({ closeModal, setModal }) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setModal(false);
  };
  return (
    <ModalWrap onClick={closeModal}>
      <Wrap>
        <Title>LogOut?</Title>
        <Content style={{ flexDirection: "row" }}>
          <LastBtn onClick={logout}>Yes</LastBtn>
          <LastBtn
            onClick={() => {
              setModal(false);
            }}
          >
            No
          </LastBtn>
        </Content>
      </Wrap>
    </ModalWrap>
  );
};

export default ModalBase;
