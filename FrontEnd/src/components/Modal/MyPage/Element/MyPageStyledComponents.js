import styled from "styled-components";
const WholeWrap = styled.div`
  width: 100%;
  height: 100%;
`;
const Wrap = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  height: 20px;
  padding: 5px;
  margin-left: 20px;
  :nth-child(2) {
    width: 70px;
  }
`;
const Preview = styled.span`
  margin-left: 20px;
  width: 50px;
  height: 50px;
`;
const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const BtnWrap = styled.button`
  width: 80%;
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 2px solid green;
  font-weight: bold;
  color: green;
  :hover {
    cursor: pointer;
    background-color: green;
    color: white;
  }
`;
const PaginationElem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;
const BuyBtn = styled.button`
  width: 100%;
  height: 35px;
  border: 2px solid green;
  background-color: white;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: green;
    color: white;
  }
`;
const PaginationNum = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ComponentWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 12px;
  border: 2px solid green;
`;

const ComponentSpan = styled.span`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  height: 40px;
  width: 40px;
`;
const Nav = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 5px;
`;
const NumCount = styled.span`
  margin: 0px 5px;
  cursor: pointer;
`;
const SellDataDiv = styled.div`
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  border: 2px solid green;
  margin-bottom: 10px;
  border-radius: 12px;
  box-shadow: 2px 2px 3px green;
`;
const SellDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  color: green;
  font-size: 30px;
  padding-left: 10px;
`;
const SellDivReverse = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row-reverse;
  font-size: 30px;
`;
const CallenderWrap = styled.div`
  width: 100%;
  min-height: 400px;
  margin-top: 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;
const Callender = styled.div`
  width: calc(100% / 7 - 15px);
  height: 50px;
  border: 1px solid black;
  margin: 5px 5px;
`;
const CallenderDay = styled.div`
  width: calc(100% / 7 - 15px);
  height: 15px;
  border: 1px solid black;
  margin: 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  :nth-child(2) {
    color: red;
  }
  :nth-child(8) {
    color: blue;
  }
`;
const CallenderMonth = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CallenderDate = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CallenderPrice = styled.div`
  width: 100%;
  height: calc(100% - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-overflow: ellipsis;
`;
const CallenderUnit = styled.div`
  width: 50px;
  font-size: 10px;
  margin-left: 120px;
`;
const CallenderDayNav = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CallenderDayNavSpan = styled.span`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const CallenderSellWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;
const CallenderSell = styled.span`
  width: 100px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  box-shadow: 2px 2px 3px black;
`;
const CallenderSellImg = styled.img`
  width: 45px;
  height: 45px;
`;
const CallenderPagination = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const CallenderPaginationSpan = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;
const ProfileWrap = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
export {
  Wrap,
  Input,
  Preview,
  PreviewImg,
  BtnWrap,
  WholeWrap,
  PaginationElem,
  BuyBtn,
  PaginationNum,
  ComponentWrap,
  ComponentSpan,
  Img,
  Nav,
  NumCount,
  SellDataDiv,
  CallenderWrap,
  SellDiv,
  SellDivReverse,
  Callender,
  CallenderDay,
  CallenderMonth,
  CallenderPrice,
  CallenderUnit,
  CallenderDate,
  CallenderDayNav,
  CallenderDayNavSpan,
  CallenderSellWrap,
  CallenderSell,
  CallenderSellImg,
  CallenderPagination,
  CallenderPaginationSpan,
  ProfileWrap,
};
