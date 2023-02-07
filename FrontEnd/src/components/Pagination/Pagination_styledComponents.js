import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Div = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: yellow;
  margin-top: 10px;
`;
const Span = styled.span`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-weight: bold;
`;
export { Wrap, Img, Div, Span };
