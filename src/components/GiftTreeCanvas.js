import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import Tree from "../img/tree.png";

const gifts = ["title1", "title2", "title3", "title4", "title5","title5"];
const images = [
  require("../img/giftBox1.png"),
  require("../img/giftBox2.png"),
  require("../img/giftBox3.png")
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};


export default function GiftTreeCanvas() {
  const canvasRef = useRef(null);
  const [selectedObj, setSelectedObj] = useState("");
  const [mousePosition, setMousePosition] = useState({
    positionX: null,
    positionY: null,
  });

  useEffect(() => {
    // 컴포넌트 마운트 시 저장된 Canvas 상태를 로드하여 복원합니다.
    loadCanvasState();
  }, []);

  const loadCanvasState = () => {
    const canvasCur = canvasRef.current;
    const savedCanvasState = localStorage.getItem("canvasState");

    if (savedCanvasState) {
      const savedImage = new Image();
      savedImage.src = JSON.parse(savedCanvasState);
      savedImage.onload = () => {
        const ctx = canvasCur.getContext("2d");
        ctx.clearRect(0, 0, canvasCur.width, canvasCur.height);
        ctx.drawImage(savedImage, 0, 0);
      };
    }
  };

  return (
    <Wrapper
      onMouseMove={(e) => {
        if (selectedObj !== "") {
          setMousePosition({
            ...mousePosition,
            positionX: e.clientX,
            positionY: e.clientY,
          });
        }
      }}
    >
      <CanvasContainer backgroundImg={Tree}>
        <CanvasComponent
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      </CanvasContainer>
      <GiftsWrapper>
        {gifts.map((gift, index) => (
          <img
            key={index}
            src={getRandomImage()}
            style={{
              width: "140px",
              height: "auto",
              marginRight: index === Math.floor(gifts.length/ 2 -1) ? "200px" : "-45px"
            }}
          />
        ))}
      </GiftsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const SelectedObj = styled.div`
  width: 100px;
  height: 100px;
  background-size: cover;
  background-image: url(${(props) => props.backgroundImg});
  transform: translate(-50%, -50%);
  overflow: visible;
`;

const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${(props) => props.backgroundImg});
  background-position-x: center;
  background-position-y: -130px;
  background-size: 853px 1280px;
  background-repeat: no-repeat;
  background-color: #8aacbf87;
`;
const GiftsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  align-content: center;
  align-items: flex-start;
  margin-top: 550px;
  flex-wrap: wrap-reverse;
  width: 100%;
  margin-left: -30px;
`;

const CanvasComponent = styled.canvas`
`;
