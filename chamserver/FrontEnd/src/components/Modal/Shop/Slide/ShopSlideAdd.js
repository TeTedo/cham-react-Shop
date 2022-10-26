import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import previewImg from "../../../../util/previewImg";
import { shopAction } from "../../../../redux/middleware/shopAction";
import { loginAction } from "../../../../redux/middleware/loginAction";
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
  Select,
  Option,
  ImgLabel,
  Preview,
} from "../../ModalStyledComponents";
const ShopSlideAdd = ({ closeModal, setModal }) => {
  const inputWrap = useRef(null);
  const [index, setIndex] = useState(0);
  const previewTarget = useRef();
  const uploadTarget = useRef();
  const dispatch = useDispatch();
  const moveLeft = () => {
    if (index !== 0) setIndex(index - 1);
  };
  const moveRight = () => {
    if (index !== 2) setIndex(index + 1);
  };
  const imgPreview = (e) => {
    previewImg(e.target, previewTarget.current);
  };
  let shopAllData = useSelector((state) => state.shopData);
  shopAllData = Object.values(shopAllData);
  const upLoadSlide = () => {
    // input 값들 받아오기
    const input = Object.values(inputWrap.current.children)
      .map((v) => v.value)
      .filter((v) => v);

    //이미지 저장할 formdata 설정
    const formData = new FormData();
    const config = { header: { "content-type": "multipart/form-data" } };
    formData.append("file", uploadTarget.current.files[0]);
    dispatch(loginAction.loginCheck()).then(() => {
      if (localStorage.getItem("login") === "true") {
        const id = input[0].split(" ")[0];
        formData.append("data", id);
        dispatch(
          shopAction.uploadSlideToServer({
            config,
            formData,
          })
        );
        setModal(false);
      } else {
        alert("로그인이 필요합니다.");
      }
    });
  };
  return (
    <ModalWrap onClick={closeModal}>
      <Wrap>
        <Title>ADD SLIDE</Title>
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
            <Select
              placeholder="물건 이름"
              style={{ display: index === 0 ? "block" : "none" }}
            >
              {shopAllData.map((v, idx) => (
                <Option key={idx}>
                  {v.id} {v.user_id} {v.name} {v.introduction} {v.price}원
                </Option>
              ))}
            </Select>
            <Preview
              ref={previewTarget}
              style={{ display: index === 1 ? "block" : "none" }}
            />
            <ImgLabel
              htmlFor="upLoadImg"
              style={{ display: index === 1 ? "block" : "none" }}
            >
              배경 사진
            </ImgLabel>
            <Input
              id="upLoadImg"
              type="file"
              style={{ display: "none" }}
              onChange={imgPreview}
              ref={uploadTarget}
            />
            <LastBtn
              style={{ display: index === 2 ? "block" : "none" }}
              onClick={upLoadSlide}
            >
              UPLOAD!!
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

export default ShopSlideAdd;
