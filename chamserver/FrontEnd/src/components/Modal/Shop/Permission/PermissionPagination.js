import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PaginationWrap, Pagination } from "../../ModalStyledComponents";
const PermissionPagination = ({ index, pageLength, setIndex }) => {
  const changeIndex = (e) => {
    setIndex(e.target.textContent - 1);
  };
  return (
    <PaginationWrap>
      {new Array(pageLength).fill(0).map((v, idx) => (
        <Pagination
          key={idx}
          onClick={changeIndex}
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
  );
};

export default PermissionPagination;
