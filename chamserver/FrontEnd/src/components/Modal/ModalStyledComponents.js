import styled from "styled-components";

const ModalWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 999;
  backdrop-filter: blur(5px);
`;

const Wrap = styled.div`
  position: absolute;
  width: 400px;
  height: 300px;
  border-radius: 12px;
  border: 2px solid green;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
`;
const Title = styled.div`
  width: 300px;
  height: 50px;
  margin-top: 30px;
  color: green;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;
const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  padding: 10px;
  font-size: large;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const LabelWrap = styled.div`
  display: flex;
`;
const Label = styled.label`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: black;
  margin-bottom: 10px;
  margin-right: 10px;
`;
const InputWrap = styled.div`
  width: 200px;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 200px;
  height: 30px;
  margin: 0 10px;
  border-radius: 12px;
  padding-left: 10px;
`;
const BtnWrap = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Btn = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  :hover {
    background-color: green;
  }
`;
const LastBtn = styled.div`
  width: 100px;
  height: 30px;
  text-align: center;
  border: 1px solid green;
  background-color: green;
  color: white;
  border-radius: 12px;
  margin: 0 10px;
  font-weight: bold;
  :hover {
    background-color: white;
    color: green;
    cursor: pointer;
  }
`;
const Category = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: green;
  margin-right: 20px;
`;
const Select = styled.select`
  width: 100%;
`;
const Option = styled.option``;
const ImgLabel = styled.label`
  border: 1px solid black;
  width: 100px;
  height: 20px;
  color: green;
  font-weight: bold;
  font-size: 15px;
  display: flex;
  text-align: center;
`;
const Preview = styled.img`
  width: 50px;
  height: 50px;
`;
const PermissionWrap = styled.div`
  position: absolute;
  z-index: 999;
  width: 700px;
  height: 700px;
  border-radius: 12px;
  border: 2px solid green;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
`;
const PermissionContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  padding: 10px;
  font-size: large;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PermissionArgWrap = styled.div`
  width: 100%;
  border: 1px solid green;
  border-radius: 12px;
  box-sizing: border-box;
  margin-bottom: 10px;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PaginationWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Pagination = styled.span`
  width: 50px;
  height: 50px;
  margin: 0px 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PermissionSpan = styled.span`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-all;
`;
const PermissionInfo = styled.div`
  width: 100%;
  display: flex;
`;
const PermissionInfoSpan = styled.div`
  width: 80px;
  color: green;
  font-weight: bold;
  :nth-child(1) {
    margin-left: 25px;
  }
  text-align: center;
`;
const MyPageContent = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  padding: 10px;
  font-size: large;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MiniNav = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
`;
const MyPageElem = styled.div`
  width: 400px;
  height: 100%;
`;
const MiniNavWrap = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 12px;
  :hover {
    color: green;
    background-color: gray;
  }
`;
const CartInput = styled.input`
  display: none;
`;
const LabelInput = styled.label`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LabelControl = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: green;
  cursor: pointer;
`;
const MyPageWrap = styled.div`
  position: absolute;
  z-index: 999;
  width: 600px;
  height: 800px;
  border-radius: 12px;
  border: 2px solid green;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
`;

export {
  CartInput,
  LabelInput,
  LabelControl,
  ModalWrap,
  Wrap,
  Content,
  Title,
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
  PermissionWrap,
  PermissionContent,
  PermissionArgWrap,
  PaginationWrap,
  Pagination,
  PermissionSpan,
  PermissionInfo,
  PermissionInfoSpan,
  MyPageContent,
  MiniNav,
  MyPageElem,
  MiniNavWrap,
  MyPageWrap,
  ContentWrap,
};
