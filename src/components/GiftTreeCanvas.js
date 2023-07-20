import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Tree from "../img/tree.png";
import { Card, CardTitle, CardBody, CardText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import axiosConfig from '../utils/api/axiosConfig';
import { motion } from "framer-motion";

const gifts = [
  {
    boxId: 0,
    treeId: 0,
    content: "메리 클스마스~~~"
  },{
    boxId: 1,
    treeId: 0,
    content: "사실 너를 좋아했어.."
  },{
    boxId: 2,
    treeId: 0,
    content: "그만 나대"
  },{
    boxId: 3,
    treeId: 0,
    content: "아 배고파"
  },{
    boxId: 4,
    treeId: 0,
    content: "올 한 해 동안 고생 많았다!"
  },{
    boxId: 5,
    treeId: 0,
    content: "이런 거 왜 함? 초딩같애"
  }
];
const images = [
  require("../img/giftBox1.png"),
  require("../img/giftBox2.png"),
  require("../img/giftBox3.png")
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const giftImages = gifts.map(() => getRandomImage()); // Generate random images for each gift

export default function GiftTreeCanvas() {
  const canvasRef = useRef(null);
  const [selectedObj, setSelectedObj] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isReloaded, setIsReloaded] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    positionX: null,
    positionY: null,
  });
  const [selectedGift, setSelectedGift] = useState(null); // New state for the selected gift
  const toggle = () => setIsOpen(!isOpen); 
  const selectGift = (index) => {
    setSelectedGift(index); // Set the selected gift index
    toggle(); // Open the modal
  };

  useEffect(() => {
    // 컴포넌트 마운트 시 저장된 Canvas 상태를 로드하여 복원합니다.
    loadCanvasState();
    setIsReloaded(true);
  }, []);


  

  const loadCanvasState = () => {
    const canvasCur = canvasRef.current;
    axiosConfig.get("/usertree/1",{
    
    }).then(res=>{
      const imageData = `"${res.data}"`
      console.log("data insert")
    localStorage.setItem("canvasState", imageData);
     }).catch(
      error=>{console.error("Failed to get user tree:", error);
    })
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
          <motion.div
          animate={!isReloaded && index === gifts.length - 1 ? { scale: [0, 1], rotate: [0, 3, 0, -3, 0, 3, 0, -3, 0] } : {}}
          key={index}
          >
            <img
              key={index}
              src={giftImages[index]}
              style={{
                width: "140px",
                height: "auto",
                overflow: "visible",
                zIndex: index,
                marginRight: index === Math.floor(gifts.length/ 2 -1) ? "200px" : "-5px"
              }}
              onClick={()=>selectGift(index)}
            />
            {isOpen && (selectedGift == index) &&  ( // Conditionally render the modal
            <GiftModal>
              <Card body style={{width:"500px"}}>
                <CardTitle style={{marginBottom: "20px"}} tag="h2">{index+1}번째 편지</CardTitle>
                <CardText style={{marginBottom: "30px"}} tag="h3">{gift.content}</CardText>
                <Button onClick={toggle} color="success">확인</Button>
              </Card>
            </GiftModal>
          )}
          </motion.div>
        ))}
        <div onClick={()=>setIsReloaded(false)}>dddd</div>
      </GiftsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  // height: 100vh;
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
  // background-size: 853px 1280px;
  background-size: 700px 1040px;
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
const GiftModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out;
`

const CanvasComponent = styled.canvas`
`;
