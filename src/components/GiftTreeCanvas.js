import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Tree from "../img/tree.png";
import { Card, CardTitle, CardBody, CardText, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import axiosConfig from '../utils/api/axiosConfig';
import { motion } from "framer-motion";
import {useGiftBoxCountStore} from "../stores/giftBoxCount";

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

const giftImages = gifts.map(() => getRandomImage());

export default function GiftTreeCanvas() {
  const canvasRef = useRef(null);
  const [selectedObj, setSelectedObj] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [waitingModal, setWaitingModal] = useState(false);
  const [isReloaded, setIsReloaded] = useState(true);
  const {giftBoxCount} = useGiftBoxCountStore();

  const [mousePosition, setMousePosition] = useState({
    positionX: null,
    positionY: null,
  });
  const [selectedGift, setSelectedGift] = useState(null); 
  const toggle = () => setIsOpen(!isOpen); 
  const selectGift = (index) => {
    setSelectedGift(index); // Set the selected gift index
    toggle(); // Open the modal
  };

  //버그: 월이 +1로 해서 계산됨
  const definedDate = new Date(2023, 6, 21, 9, 30);
  // 현재 날짜와 시간 가져오기
  const currentDate = new Date();

  const [canvasState, setCanvasState] = useState("");
  useEffect(() => {
    // 컴포넌트 마운트 시 저장된 Canvas 상태를 로드하여 복원합니다.
    loadCanvasState();
    setIsReloaded(true);
  }, []);

  useEffect(()=>{
    const canvasCur = canvasRef.current;
    if (canvasState !== "") {
      const savedImage = new Image();
      savedImage.src = JSON.parse(canvasState);
      savedImage.onload = () => {
        const ctx = canvasCur.getContext("2d");
        ctx.clearRect(0, 0, canvasCur.width, canvasCur.height);
        ctx.drawImage(savedImage, 0, 0);
      };
    }
  },[canvasState]);

  const loadCanvasState = () => {
    axiosConfig.get("/usertree/2",{
    }).then(res=>{
      const imageData = `"${res.data}"`
      setCanvasState(imageData);
     }).catch(
      error=>{console.error("Failed to get user tree:", error);
    })
  };

  let snowmanImageIndex = 0;
  // if (gifts.length >= 5) {
  //   snowmanImageIndex = 1;
  // }
  // if (gifts.length >= 10) {
  //   snowmanImageIndex = 2;
  // }
  if (giftBoxCount >= 5) {
    snowmanImageIndex = 1;
  }
  if (giftBoxCount >= 10) {
    snowmanImageIndex = 2;
  }

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
          animate={!isReloaded && index === giftBoxCount ? { scale: [0, 1], rotate: [0, 3, 0, -3, 0, 3, 0, -3, 0] } : {}}
          key={index}
          >
            <img
              key={index}
              src={giftImages[index]}
              alt="img"
              style={{
                width: "130px",
                height: "auto",
                overflow: "visible",
                zIndex: index,
                marginRight: index === Math.floor(giftBoxCount/ 2 ) ? "200px" : "-5px"
              }}
              onClick={()=>{
                if (currentDate > definedDate) {
                  selectGift(index);
                } else {
                  setWaitingModal(true);
                }
              }}
            />
            {isOpen && (selectedGift === index) &&  ( // Conditionally render the modal
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

        {waitingModal && 
          <Modal isOpen={waitingModal} toggle={()=>{setWaitingModal(!waitingModal)}} centered>
            <ModalHeader toggle={()=>{setWaitingModal(!waitingModal)}}>Time Tree</ModalHeader>
            <ModalBody>
              12월 25일을 기다려주세요!
            </ModalBody>
          </Modal>}

        <div onClick={()=>setIsReloaded(false)}>dddd</div>
        <SnowmanZone>
          <img src={require('../img/snowman.png')} alt="snowman" style={{width: "300px", height:"auto"}}/>
          {snowmanImageIndex >= 1 && (
            <img src={require('../img/snowmanLV2.png')} alt="snowman" style={{width: "300px", height:"auto", marginTop:"-40px", zIndex:-1}}/>
          )}
          {snowmanImageIndex >= 2 && (
            <img src={require('../img/snowmanLV3.png')} alt="snowman" style={{width: "600px", height:"auto", marginTop:"-30px", marginLeft:"-180px",zIndex:-2}}/>
          )}
      </SnowmanZone>
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

const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${(props) => props.backgroundImg});
  background-position-x: center;
  background-position-y: -130px;
  // background-size: 853px 1280px;
  background-size: 700px 1040px;
  background-repeat: no-repeat;
  // background-color: #8aacbf87;
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
  z-index: 2;
`;
const GiftModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out;
`

const SnowmanZone = styled.div`
  position: fixed;
  bottom: 15%;
  left: 10%;
  display: flex;
  flex-direction: column;
  padding-left : 200px;
  z-index: -10;
`

const CanvasComponent = styled.canvas`
`;
