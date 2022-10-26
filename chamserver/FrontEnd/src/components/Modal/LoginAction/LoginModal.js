import React, { useRef, useState } from "react";
import { loginAction } from "../../../redux/middleware/loginAction";
import { useDispatch } from "react-redux";
import {
  ModalWrap,
  Wrap,
  Title,
  Content,
  LabelWrap,
  Label,
  Input,
  InputWrap,
  Btn,
  BtnWrap,
  LastBtn,
} from "../ModalStyledComponents";
const SignUpModal = ({ closeModal, setModal }) => {
  const inputWrap = useRef(null);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const moveLeft = () => {
    if (index !== 0) setIndex(index - 1);
  };
  const moveRight = () => {
    if (index !== inputWrap.current.children.length - 1) setIndex(index + 1);
  };
  const login = (e) => {
    const input = Object.values(inputWrap.current.children).map((v) => v.value);
    const [user_id, user_pw] = input;
    dispatch(loginAction.login({ user_id, user_pw }));
    setModal(false);
  };
  return (
    <ModalWrap onClick={closeModal}>
      <Wrap>
        <Title>Login</Title>
        <Content>
          <LabelWrap>
            <Label
              style={{ backgroundColor: index === 0 ? "green" : "black" }}
            />
            <Label
              style={{ backgroundColor: index === 1 ? "green" : "black" }}
            />
            <Label
              style={{ backgroundColor: index === 2 ? "green" : "black" }}
            />
          </LabelWrap>
          <InputWrap ref={inputWrap}>
            <Input
              placeholder="ID"
              style={{ display: index === 0 ? "block" : "none" }}
            />
            <Input
              placeholder="PassWord"
              style={{ display: index === 1 ? "block" : "none" }}
            />
            <LastBtn
              style={{ display: index === 2 ? "block" : "none" }}
              onClick={login}
            >
              Login!!
            </LastBtn>
          </InputWrap>
          <BtnWrap>
            <Btn onClick={moveLeft}>
              <i className="fa-sharp fa-solid fa-arrow-left"></i>
            </Btn>
            <Btn onClick={moveRight}>
              <i className="fa-solid fa-arrow-right"></i>
            </Btn>
          </BtnWrap>
        </Content>
      </Wrap>
    </ModalWrap>
  );
};

export default SignUpModal;
