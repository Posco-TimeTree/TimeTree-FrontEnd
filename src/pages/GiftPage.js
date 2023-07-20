import React, { useState } from 'react';
import styled from 'styled-components';
import img from '../img/tree.png';
import GiftTreeCanvas from '../components/GiftTreeCanvas';
import WriteLetter from '../components/WriteLetter';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {useToggleStore} from "../stores/toggleStore";
import ToggleLight from '../components/ToggleLight';

const GiftPage = () => {
  const [userName, setUserName] = useState("미진");
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

    <Wrapper>
      <Title>{userName}님의 크리스마스 트리</Title>
      <GiftTreeCanvas/>
      <ToggleLight/>
    </Wrapper>

    <WriteLetter/>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Title = styled.h1`
  position: absolute;
  display: flex;
  text-align: center;
  border: 1px solid red;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonWrapper = styled.div`
  z-index: 99999;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledButton = styled(Button)`
  padding: 20px 40px;
  font-size: 1.5rem;
`;

export default GiftPage;
