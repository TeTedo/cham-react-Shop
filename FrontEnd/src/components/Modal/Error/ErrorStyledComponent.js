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
  height: 630px;
  border-radius: 12px;
  border: 2px solid green;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 30px;
  color: green;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;
const ErrorTitle = styled.input`
  margin: 20px auto;
  width: 80%;
  height: 30px;
  box-sizing: border-box;
  border: 2px solid black;
`;
const ErrorMsg = styled.textarea`
  box-sizing: border-box;
  margin: auto;
  width: 80%;
  height: 400px;
  border: 2px solid black;
`;
const Btn = styled.button`
  width: 80%;
  height: 30px;
  margin: auto;
`;
const SelectError = styled.select`
  margin: 5px auto;
  width: 80%;
  height: 30px;
  box-sizing: border-box;
  border: 2px solid black;
`;
export { ModalWrap, Wrap, ErrorTitle, ErrorMsg, Title, Btn, SelectError };
