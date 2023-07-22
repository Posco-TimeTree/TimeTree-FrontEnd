import React, { useEffect, useState } from 'react';
import { Input, Label } from 'reactstrap';
import styled from 'styled-components';
import axiosConfig from '../utils/api/axiosConfig';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {useToggleStore, useUserStore} from "../stores";
import {useGiftBoxCountStore} from "../stores/giftBoxCount";
import { useLocation } from 'react-router-dom';

const WriteLetter = () => {
  const {isToggled, toggle} = useToggleStore();
  // const {user} = useUserStore();
  const location = useLocation();
  const {pathname, search} = location;
  const userId = pathname.slice(11,12);
  const userName = decodeURIComponent(search.slice(6));

  const [message, setMessage] = useState("");
  const [length, setLength] = useState(0);
  const {giftBoxCount, setGiftBoxCountPlus} = useGiftBoxCountStore();

  useEffect(()=>{
    console.log("box count: ", giftBoxCount);
  },[giftBoxCount])

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("편지가 등록되었습니다: ", message);
    setMessage("");
    toggle();
    setLength(0);

    axiosConfig.post("/messages",{
      userId: userId,
      content: message,
    }).then(res=>{
      console.log(res.data);
      setGiftBoxCountPlus();
    }).catch(err=>{console.log(err)})
  }
  const onChange = (e)=>{
    const {value} = e.target;
    setMessage(value);
    setLength(value.length);
  }

  return (
    <Wrapper>
      <Modal isOpen={isToggled} toggle={toggle} centered size={"lg"}>
        <ModalHeader toggle={toggle}>To. {userName}</ModalHeader>
        <ModalBody>
          <form onSubmit={onSubmit}>
            <Label for="exampleText">편지를 남겨주세요</Label>
            <StyledTextarea
              id="exampleText"
              name="text"
              type="textarea"
              placeholder="친구를 위한 편지를 작성해보세요!"
              required
              maxLength={200}
              autoFocus
              onChange={onChange}
            />
            <ButtonDiv>
              <Button color="primary" type="submit" size="lg">
                편지 쓰기
              </Button>{" "}
              <Button color="secondary" type='button' onClick={toggle} size="lg">
                취소
              </Button>
            </ButtonDiv>
          </form>
          <StyledLength>{length}/200</StyledLength>
        </ModalBody>
      </Modal>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  // font-size: 50px;
  position: relation;
`;
const StyledTextarea = styled(Input)`
  width: 100%;
  height: 300px;
  font-size: 20px;
  resize: none;
`;
const ButtonDiv = styled.div`
  width: fit-content;
  margin: auto;
  margin-top: 20px;
`;
const StyledLength = styled.p`
  font-size: 20px;
  position: absolute;
  // border: 1px solid red;
  top: 70%;
  left: 85%;
`;
export default WriteLetter;
