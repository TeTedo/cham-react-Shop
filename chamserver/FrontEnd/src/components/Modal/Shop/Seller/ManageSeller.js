import React, { useEffect, useRef, useState } from "react";
import {
  ModalWrap,
  Title,
  PermissionWrap,
  PermissionContent,
  PermissionInfo,
  PermissionInfoSpan,
  PermissionArgWrap,
  PermissionSpan,
  PaginationWrap,
  Pagination,
} from "../../ModalStyledComponents";

import { useDispatch, useSelector } from "react-redux";
import { shopAction } from "redux/middleware/shopAction";
const ManageSeller = ({ closeModal, setModal }) => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const sellerData = useSelector((state) => state.sellerData);
  const pageLength = Math.ceil(sellerData.length / 5);
  const getInputData = useRef();
  const result = (e) => {
    const user_id = getInputData.current.textContent;
    const resultData = e.target.textContent === "승인" ? "approve" : "reject";
    dispatch(shopAction.resultSellerData({ user_id, result: resultData })).then(
      () => {
        dispatch(shopAction.getSellerData());
      }
    );
  };
  useEffect(() => {
    dispatch(shopAction.getSellerData());
  }, []);
  return (
    <ModalWrap onClick={closeModal}>
      <PermissionWrap>
        <Title>SELLER PERMISSION</Title>
        <PermissionContent>
          <PermissionInfo style={{ paddingLeft: "80px" }}>
            <PermissionInfoSpan style={{ width: "80px" }}>
              아이디
            </PermissionInfoSpan>
            <PermissionInfoSpan style={{ width: "80px" }}>
              이름
            </PermissionInfoSpan>
            <PermissionInfoSpan style={{ width: "80px" }}>
              번호
            </PermissionInfoSpan>
            <PermissionInfoSpan style={{ width: "80px" }}>
              이메일
            </PermissionInfoSpan>
          </PermissionInfo>
          {sellerData.map((v, idx) => (
            <PermissionArgWrap key={idx}>
              <PermissionSpan ref={getInputData}>{v.user_id}</PermissionSpan>
              <PermissionSpan>{v["User.name"]}</PermissionSpan>
              <PermissionSpan>{v["User.mobile_number"]}</PermissionSpan>
              <PermissionSpan>{v["User.email"]}</PermissionSpan>
              <button onClick={result}>승인</button>
              <button onClick={result}>거절</button>
            </PermissionArgWrap>
          ))}
          <PaginationWrap>
            {new Array(pageLength).fill(0).map((v, idx) => (
              <Pagination
                key={idx}
                onClick={() => {
                  setIndex(idx);
                }}
                style={{
                  color: index === idx ? "green" : "",
                  fontSize: index === idx ? "20px" : "",
                  fontWeight: index === idx ? "bold" : "",
                }}
              >
                {idx + 1}
              </Pagination>
            ))}
          </PaginationWrap>
        </PermissionContent>
      </PermissionWrap>
    </ModalWrap>
  );
};

export default ManageSeller;
