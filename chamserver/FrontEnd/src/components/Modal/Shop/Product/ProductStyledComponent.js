import styled from "styled-components";
const ProductionWrap = styled.div`
  position: absolute;
  z-index: 999;
  width: 800px;
  height: 500px;
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
const ProductionContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 350px;
  padding: 10px;
  font-size: large;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentDiv = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :first-child {
    box-shadow: 2px 2px 3px black;
    margin-right: 10px;
  }
`;
const ProductionImg = styled.img`
  width: 100%;
  height: 100%;
`;
const Review = styled.div`
  width: 100%;
  height: 220px;
  box-sizing: border-box;
`;
const ReviewWrap = styled.div`
  width: 100%;
  height: 30px;
  margin: 10px 0px;
  border: 2px solid green;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
`;
const ReviewProfile = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  border-radius: 12px;
`;
const ReviewText = styled.div`
  width: calc(100% - 40px);
  height: 100%;
  text-overflow: ellipsis;
`;
const ReviewPage = styled.div`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ReviewPageSpan = styled.span`
  width: 30px;
  height: 30px;
  margin: 0px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Grade = styled.div`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Price = styled.div`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  border-bottom: 2px dotted green;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
const BtnWrap = styled.div`
  width: 70%;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ViewBtn = styled.button`
  margin-left: 20px;
`;
export {
  ProductionWrap,
  ProductionContent,
  ContentDiv,
  ProductionImg,
  Review,
  Price,
  Grade,
  BtnWrap,
  ReviewPage,
  ReviewWrap,
  ReviewProfile,
  ReviewText,
  ReviewPageSpan,
  ViewBtn,
};
