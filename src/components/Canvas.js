import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import Tree from "../img/tree.png";

export default function Canvas() {
  const canvasRef = useRef(null);
  const [selectedObj, setSelectedObj] = useState("");
  const [mousePosition, setMousePosition] = useState({
    positionX: null,
    positionY: null,
  });

  const drawObject = (mouseEndPosition) => {
    const canvasCur = canvasRef.current;
    const ctx = canvasCur.getContext("2d");
    const objImage = new Image();
    objImage.src = selectedObj;
    if (ctx === null) return;
    if (!mouseEndPosition.positionX) return;
    if (!mouseEndPosition.positionY) return;
    ctx.drawImage(
      objImage,
      mouseEndPosition.positionX - 50,
      mouseEndPosition.positionY - 50,
      100,
      100
    );
  };

  const handleSelectedObj = (obj) => {
    setSelectedObj(obj);
  };

  const handleMousePositionInSideBar = ({ positionX, positionY }) => {
    setMousePosition({ ...mousePosition, positionX, positionY });
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
      <SideBar
        handleSelectedObj={handleSelectedObj}
        handleMousePositionInSideBar={handleMousePositionInSideBar}
      />
      {selectedObj !== "" &&
      mousePosition.positionX &&
      mousePosition.positionY ? (
        <SelectedObj
          backgroundImg={selectedObj}
          style={{
            position: "absolute",
            left: mousePosition.positionX,
            top: mousePosition.positionY,
          }}
          onClick={(e) => {
            setSelectedObj("");
            drawObject({ positionX: e.clientX, positionY: e.clientY });
          }}
        />
      ) : null}
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
  width: calc(100% - 120px);
  background-image: url(${(props) => props.backgroundImg});
  background-position-x: center;
  background-position-y: -130px;
  background-size: 853px 1280px;
  background-repeat: no-repeat;
  background-color: #8aacbf87;
`;

const CanvasComponent = styled.canvas``;