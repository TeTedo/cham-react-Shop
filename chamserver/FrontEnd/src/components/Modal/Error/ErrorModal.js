import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { errAction } from "redux/middleware/errorAction";
import {
  ModalWrap,
  Wrap,
  ErrorMsg,
  Title,
  Btn,
  SelectError,
  ErrorTitle,
} from "./ErrorStyledComponent";
const ErrorModal = ({ closeModal, setModal }) => {
  const type = useRef();
  const dispatch = useDispatch();
  const location = useLocation();
  const text = useRef();
  const bigTitle = useRef();
  const user_id = useSelector((state) => state.login?.user_id);
  const submit = () => {
    const labels = [type.current.value];
    const title = `[CHAM]-${location.pathname} ${type.current.value} 작성자 : ${user_id} ${bigTitle.current.value}`;
    const body = text.current.value;
    const errData = { title, body, labels };
    dispatch(errAction.reportError(errData));
    setModal(false);
  };
  return (
    <ModalWrap onClick={closeModal}>
      <Wrap>
        <Title>REPORT ERROR</Title>
        <SelectError ref={type}>
          <option value="bug">에러 신고</option>
          <option value="question">제안</option>
        </SelectError>
        <ErrorTitle placeholder="제목" ref={bigTitle} />
        <ErrorMsg placeholder="에러 내용" ref={text} />
        <Btn onClick={submit}>제출</Btn>
      </Wrap>
    </ModalWrap>
  );
};

export default ErrorModal;
