import React, { useEffect, useRef, useState } from "react";
import "../styles/Slide/Slide.css";
const Slide = ({ component: Component, length, data }) => {
  const [index, setIndex] = useState(0);
  const [left, setLeft] = useState(0);
  const slideWrapper = useRef(null);
  let posX = 0;
  let setDrag = false;
  let setMove = 0;
  const dragStart = (e) => {
    // 마우스 드래그 할때 오류뜰때 있는데 잡기 위함
    e.preventDefault();
    posX = e.clientX;
    setDrag = true;
    slideWrapper.current.style.transition = "0s";
  };
  const dragEnd = (e) => {
    e.preventDefault();
    slideWrapper.current.style.transition = "1s";

    if (Math.abs(posX - e.clientX) > 200 && setDrag) {
      if (posX > e.clientX && index < length - 1) {
        setIndex((state) => state + 1);
      }
      if (posX < e.clientX && index > 0) {
        setIndex((state) => state - 1);
      }
      if (index === 0) {
        slideWrapper.current.style.left =
          -slideWrapper.current.children[0].getBoundingClientRect().width *
            index +
          "px";
      }
      if (index === +length - 1) {
        slideWrapper.current.style.left =
          -slideWrapper.current.children[0].getBoundingClientRect().width *
            index +
          "px";
      }
    } else {
      slideWrapper.current.style.left =
        -slideWrapper.current.children[0].getBoundingClientRect().width *
          index +
        "px";
    }
    setDrag = false;
  };
  const drag = (e) => {
    e.preventDefault();
    if (setDrag === true) {
      setMove = e.clientX - posX;
      slideWrapper.current.style.left = left + setMove + "px";
    }
  };
  useEffect(() => {
    setLeft(
      () =>
        -slideWrapper.current.children[0].getBoundingClientRect().width * index
    );
  }, [index]);
  const makeCom = new Array(Number(length))
    .fill(0)
    .map((v, idx) => <Component key={idx} data={data[idx]} />);
  const makeLabel = new Array(Number(length)).fill(0).map((v, idx) => (
    <label
      style={{
        backgroundColor: index === idx ? `hsl(0, 100%, 50%)` : "black",
      }}
      key={idx}
    />
  ));
  return (
    <div
      className="slide"
      onMouseDown={dragStart}
      onMouseUp={dragEnd}
      onMouseMove={drag}
      onMouseLeave={dragEnd}
      style={{
        backgroundImage:
          data && data[index]?.backgroundImg
            ? `url(${data[index].backgroundImg.replace(/\\/g, "/")})`
            : "",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="slide_wrap">
        <div className="slide_wrap__" ref={slideWrapper} style={{ left: left }}>
          {data ? makeCom : ""}
        </div>
        <div className="slide_label">{makeLabel}</div>
      </div>
    </div>
  );
};

export default Slide;
