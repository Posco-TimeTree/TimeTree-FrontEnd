import React, { useState } from 'react';
import styled from 'styled-components';
import img from '../img/tree.png';
import GiftTreeCanvas from '../components/GiftTreeCanvas';
import WriteLetter from '../components/WriteLetter';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {useToggleStore} from "../stores";
import ToggleLight from '../components/ToggleLight';
import Outside from "../img/outside.jpg";
import { useUserStore } from '../stores/userStore';
import Snowfall from 'react-snowfall';

const GiftPage = () => {
  // const [userName, setUserName] = useState("미진");
  const { user, setUser } = useUserStore();
  // const [modal, setModal] = useState(false);
  // const toggle = () => setModal(!modal);
  const {toggle} = useToggleStore();

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

    {/* <Wrapper backgroundImg={Outside}> */}
    <Wrapper>
      <Title>{user.name}님의 크리스마스 트리</Title>
      <GiftTreeCanvas/>
      {/* <ToggleLight/> */}
    </Wrapper>

    <WriteLetter/>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: calc(100% - 120px);
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
  transform: translate(-85%, -50%);
`;

const StyledButton = styled(Button)`
  padding: 20px 40px;
  font-size: 1.5rem;
  color: red;
  border-color: green;
  &:hover{background-color: green;}
`;

export default GiftPage;
