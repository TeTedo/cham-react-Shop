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
  Category,
  ImgLabel,
  Preview,
} from "../../ModalStyledComponents";
const UploadGoods = ({ closeModal, setModal }) => {
  const inputWrap = useRef(null);
  const [index, setIndex] = useState(0);
  const previewTarget = useRef();
  const uploadTarget = useRef();
  const dispatch = useDispatch();
  const moveLeft = () => {
    if (index !== 0) setIndex(index - 1);
  };
  const moveRight = () => {
    if (index !== 5) setIndex(index + 1);
  };
  const imgPreview = (e) => {
    previewImg(e.target, previewTarget.current);
  };
  const user_id = useSelector((state) => state.login.user_id);
  const upLoadGoods = () => {
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
        const [name, image, introduction, price, category] = input;
        const data = JSON.stringify({
          user_id,
          name,
          introduction,
          price,
          category,
        });
        formData.append("data", data);
        dispatch(
          shopAction.uploadGoodsToServer({
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
        <Title>UPLOAD GOODS</Title>
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
            <Label
              style={{ backgroundColor: index === 3 ? "green" : "black" }}
            />
            <Label
              style={{ backgroundColor: index === 4 ? "green" : "black" }}
            />
            <Label
              style={{ backgroundColor: index === 5 ? "green" : "black" }}
            />
          </LabelWrap>
          <InputWrap ref={inputWrap}>
            <Input
              placeholder="물건 이름"
              style={{ display: index === 0 ? "block" : "none" }}
            />
            <Preview
              ref={previewTarget}
              style={{ display: index === 1 ? "block" : "none" }}
            />
            <ImgLabel
              htmlFor="upLoadImg"
              style={{ display: index === 1 ? "block" : "none" }}
            >
              사진 올리기
            </ImgLabel>
            <Input
              id="upLoadImg"
              type="file"
              style={{ display: "none" }}
              onChange={imgPreview}
              ref={uploadTarget}
            />
            <Input
              placeholder="물건 설명"
              style={{ display: index === 2 ? "block" : "none" }}
            />
            <Input
              placeholder="가격(숫자만 입력)"
              type="number"
              style={{ display: index === 3 ? "block" : "none" }}
            />
            <Category style={{ display: index === 4 ? "block" : "none" }}>
              카테고리
            </Category>
            <Select
              placeholder="Mobile-number"
              style={{ display: index === 4 ? "block" : "none" }}
            >
              <Option>TOP</Option>
              <Option>BOTTOM</Option>
              <Option>SHOES</Option>
            </Select>
            <LastBtn
              style={{ display: index === 5 ? "block" : "none" }}
              onClick={upLoadGoods}
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

export default UploadGoods;
