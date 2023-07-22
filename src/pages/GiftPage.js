import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import img from '../img/tree.png';
import GiftTreeCanvas from '../components/GiftTreeCanvas';
import WriteLetter from '../components/WriteLetter';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {useToggleStore, useUserStore} from "../stores";
import ToggleLight from '../components/ToggleLight';
import Outside from "../img/outside.jpg";
import Snowfall from 'react-snowfall';
import { useLocation } from 'react-router-dom';
import { getCookie } from '../utils/auth/cookies';
import ModalCom from '../components/ModalCom';
import { v4 as uuidv4 } from 'uuid'; 

const GiftPage = () => {
  const { user } = useUserStore();
  console.log("giftpage: ", user);
  const [isMine, setIsMine] = useState(false);

  const location = useLocation();
  const {pathname, search} = location;

  const {toggle} = useToggleStore();

  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(()=>{
    if(pathname.startsWith('/gift-tree')){ // 남이 들어가는 내 트리 페이지
      setUserId(pathname.slice(11,12));
      setUserName(decodeURIComponent(search.slice(6)))
    }else{
      setUserId(user.id);
      setUserName(user.name);
      setIsMine(true);
    }
  },[]);
  useEffect(()=>{
    console.log("giftpageidname: ",userId, userName);
    console.log("giftpage is mine: ", isMine);
  },[]);
  const [copyComplete, setCopyComplete] = useState(false);
  const copy = ()=>setCopyComplete(!copyComplete);

  const copyLink = () => {
    const randomLink = uuidv4(); 
    const url = `${window.location.origin}/gift-tree/${user.id}/${randomLink}?name=${user.name}`;
    // 클립보드에 복사
    navigator.clipboard.writeText(url).then(() => {
      console.log('링크가 클립보드에 복사되었습니다. 공유해주세요!');
      copy();
    });
  };

  // const copyLink = ()=>{
  //   const url = getCookie("shareLink");
  //   navigator.clipboard.writeText(url).then(() => {
  //     console.log('링크가 클립보드에 복사되었습니다. 공유해주세요!');
  //     copy();
  //   });
  // }
  return (
    <>
    
    {!isMine && <ButtonWrapper>
      <StyledButton
        color="primary"
        size='lg'
        outline
        onClick={toggle}
      >
        편지 쓰기
      </StyledButton>
    </ButtonWrapper>}

    <Wrapper>
      <Title>{userName}님의 크리스마스 트리</Title>
      {userId !== undefined && <GiftTreeCanvas userId={userId} isMine={isMine}/>}
      {isMine && <CopyButton size="lg" onClick={copyLink}>링크 복사하기</CopyButton>}
    </Wrapper>
      <ModalCom isOpen={copyComplete} toggle={copy} body={"링크가 복사되었습니다! 나만의 트리를 공유해보세요!"}/>
    <WriteLetter/>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  background-image: url(${(props) => props.backgroundImg});
  background-position-x: center;
  background-position-y: -130px;
  background-size: 70% 100%;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  position: absolute;
  display: flex;
  text-align: center;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:999;
`;

const ButtonWrapper = styled.div`
  z-index: 99999;
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledButton = styled(Button)`
  padding: 20px 40px;
  font-size: 1.5rem;
  color: red;
  border-color: green;
  &:hover{background-color: darkgreen;}
`;
const CopyButton = styled(Button)`
  background-color: darkgreen;
  border-color: darkgreen;
  position: absolute;
  top: 15%; 
  right: 10%;
  z-index: 99;
  &:hover{background-color: green;}
`;
export default GiftPage;
