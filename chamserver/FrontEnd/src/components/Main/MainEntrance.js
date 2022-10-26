import React, { useEffect, useRef } from "react";
import { Wrap, Wrap2 } from "./MainStyledComponents";
import "./MainEntranceCss.css";
import anime from "animejs";
import { useNavigate } from "react-router-dom";
const MainEntrance = () => {
  useEffect(() => {
    const grid = [10, 10];
    const animation = anime
      .timeline({
        targets: ".inC_",
        delay: anime.stagger(200, { grid, from: "center" }),
        easing: "easeInOutQuad",
        duration: 1000,
        direction: "alternate",
        borderRadius: ["0%", "50%"],
      })
      .add({
        translateX: anime.stagger(2, { grid, from: "center", axis: "x" }),
        translateY: anime.stagger(2, { grid, from: "first", axis: "y" }),
        rotateZ: anime.stagger([0, 90], {
          grid,
          from: "center",
          axis: "x",
        }),
      });
    const btn = anime
      .timeline({
        targets: ".goShop",
      })
      .add({
        points: "0 0 30 30 40 40 ",
        baseFrequency: 0,
        scale: 1,
        loop: true,
        direction: "alternate",
        easing: "easeInOutExpo",
      });
    animation.play();
    btn.play();
  }, []);
  const navigate = useNavigate();
  const moveShop = () => {
    navigate("/shop");
  };
  return (
    <Wrap>
      <Wrap2>
        <div className="chamC">
          <div className="mainC">
            {new Array(10).fill(0).map((v, idx) => (
              <div className="inC" key={idx}>
                {new Array(10).fill(0).map((v, index) => (
                  <div
                    key={index}
                    className="inC_"
                    style={{
                      backgroundColor: "white",
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
          <div className="cut1"></div>
          <div className="cut2"></div>
          <div className="cut3"></div>
        </div>
        <div className="chamH">
          <div className="mainH">
            {new Array(10).fill(0).map((v, idx) => (
              <div className="inC" key={idx}>
                {new Array(10).fill(0).map((v, index) => (
                  <div
                    key={index}
                    className="inC_"
                    style={{
                      backgroundColor: "white",
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
          <div className="cut4"></div>
        </div>
        <div className="chamA">
          <div className="mainA">
            {new Array(10).fill(0).map((v, idx) => (
              <div className="inC" key={idx}>
                {new Array(10).fill(0).map((v, index) => (
                  <div
                    key={index}
                    className="inC_"
                    style={{
                      backgroundColor: "white",
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
          <div className="cut5"></div>
          <div className="cut6"></div>
        </div>
        <div className="chamM">
          <div className="mainM">
            {new Array(10).fill(0).map((v, idx) => (
              <div className="inC" key={idx}>
                {new Array(10).fill(0).map((v, index) => (
                  <div
                    key={index}
                    className="inC_"
                    style={{
                      backgroundColor: "white",
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
          <div className="cut7"></div>
          <div className="cut8"></div>
        </div>
        <button className="goShop" onClick={moveShop}>
          GO SHOP
        </button>
      </Wrap2>
    </Wrap>
  );
};

export default MainEntrance;
