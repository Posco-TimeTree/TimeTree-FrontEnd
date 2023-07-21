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

const GiftPage = () => {
  const { user } = useUserStore();
  const location = useLocation();
  const {pathname, search} = location;

  const {toggle} = useToggleStore();

  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(()=>{
    if(pathname.startsWith('/gift-tree')){
      setUserId(pathname.slice(11,12));
      setUserName(decodeURIComponent(search.slice(6)))
    }else{
      setUserId(user.id);
      setUserName(user.name);
    }
  },[]);
  useEffect(()=>{
    console.log(userId, userName);
  },[userId, userName]);
  

  return (
    <>
    
    <ButtonWrapper>
      <StyledButton
        color="primary"
        size='lg'
        outline
        onClick={toggle}
      >
        편지 쓰기
      </StyledButton>
    </ButtonWrapper>

    <Wrapper>
      <Title>{userName}님의 크리스마스 트리</Title>
      {userId !== 0 && <GiftTreeCanvas userId={userId}/>}
    </Wrapper>

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
  &:hover{background-color: green;}
`;

export default GiftPage;
