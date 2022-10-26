import React, { useState } from "react";
import {
  WholeWrap,
  PaginationElem,
  PaginationNum,
} from "./MyPageStyledComponents";
const MyPagePagination = ({ component: Component, data }) => {
  const [index, setIndex] = useState(0);
  const dataValue = Object.values(data);
  const pageLength = Math.ceil(dataValue.length / 10);
  return (
    <>
      <WholeWrap>
        {dataValue
          .reverse()
          .map((v, idx) => (
            <PaginationElem key={idx}>
              <Component data={v} />
            </PaginationElem>
          ))
          .slice(index * 10, (index + 1) * 10)}
      </WholeWrap>
      <PaginationElem>
        {new Array(pageLength).fill(0).map((v, idx) => (
          <PaginationNum
            key={idx}
            style={{
              color: idx === index ? "green" : "",
              fontSize: idx === index ? "25px" : "",
            }}
            onClick={() => {
              setIndex(idx);
            }}
          >
            {idx + 1}
          </PaginationNum>
        ))}
      </PaginationElem>
    </>
  );
};

export default MyPagePagination;
