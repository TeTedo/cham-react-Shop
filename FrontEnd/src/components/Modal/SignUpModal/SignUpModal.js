import React, { useRef, useState } from "react";
import { loginAction } from "../../../redux/middleware/loginAction";
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
import { useDispatch } from "react-redux";
import { Check } from "./Check";
const SignUpModal = ({ closeModal, setModal }) => {
  const inputWrap = useRef(null);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const mailCheck = useRef();
  const moveLeft = () => {
    if (index !== 0) setIndex(index - 1);
  };
  const moveRight = () => {
    if (index === 5) {
      const mail = mailCheck.current.value;
      const reg = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      );
      if (!reg.test(mail)) {
        alert("올바른 메일 형식을 입력하세요.");
        return;
      }
    }
    if (index !== inputWrap.current.children.length - 1) setIndex(index + 1);
  };
  const signup = (e) => {
    // input 값들 받아오기
    const input = Object.values(inputWrap.current.children).map((v) => v.value);
    const [user_id, user_pw, name, nick_name, mobile_number, email, address] =
      input;
    dispatch(
      loginAction.signup({
        user_id,
        user_pw,
        name,
        nick_name,
        mobile_number,
        email,
        address,
      })
    );
    setModal(false);
  };
  return (
    <ModalWrap onClick={closeModal}>
      <Wrap>
        <Title>Sign Up</Title>
        <Content>
          <LabelWrap>
            {new Array(8).fill(0).map((v, idx) => (
              <Label
                style={{ backgroundColor: idx === index ? "green" : "black" }}
                key={idx}
              />
            ))}
          </LabelWrap>
          <InputWrap ref={inputWrap}>
            <Input
              placeholder="ID"
              style={{ display: index === 0 ? "block" : "none" }}
              onChange={Check.IDCheck}
            />
            <Input
              placeholder="PassWord"
              style={{ display: index === 1 ? "block" : "none" }}
            />
            <Input
              placeholder="Name"
              style={{ display: index === 2 ? "block" : "none" }}
              onChange={Check.nameCheck}
            />
            <Input
              placeholder="Nick Name"
              style={{ display: index === 3 ? "block" : "none" }}
              onChange={Check.nickNameCheck}
            />
            <Input
              placeholder="Mobile-number"
              style={{ display: index === 4 ? "block" : "none" }}
              onChange={Check.mobileCheck}
            />
            <Input
              placeholder="E-mail"
              type="email"
              style={{ display: index === 5 ? "block" : "none" }}
              ref={mailCheck}
            />
            <Input
              placeholder="Address"
              style={{ display: index === 6 ? "block" : "none" }}
              onChange={Check.nickNameCheck}
            />
            <LastBtn
              style={{ display: index === 7 ? "block" : "none" }}
              onClick={signup}
            >
              Sign Up!!
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
