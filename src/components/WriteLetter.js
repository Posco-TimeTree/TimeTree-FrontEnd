// import React, { useState } from 'react';
// import { Input, Label } from 'reactstrap';
// import styled from 'styled-components';
// import axiosConfig from '../utils/api/axiosConfig';
// import { useMessageStore } from '../stores/messageStore';

// const WriteLetter = () => {
//   // const [letter, setLetter] = useState("");
//   const {message, setMessage} = useMessageStore;

//   // const onSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log("편지가 등록되었습니다: ", message);
//   //   setMessage("");
//   //   // axiosConfig.post("/messages",{
//   //   //   userId: ,
//   //   //   content: letter,
//   //   // }).then(res=>{
//   //   //   console.log(res.data);
//   //   // }).catch(err=>{console.log(err)})
//   // }
// // 모달로 메세지 창 띄워서 제출
//   return (
//     <>
//     {/* <form onSubmit={onSubmit}> */}
//       <Label for="exampleText">
//          편지를 남겨주세요
//       </Label>
//       <StyledTextarea
//         id="exampleText"
//         name="text"
//         type="textarea"
//         placeholder="친구를 위한 편지를 작성해보세요!"
//         required
//         maxLength={50}
//         autoFocus
//         onChange={(e) => { console.log("onChange: ",e.target.value); setMessage(e.target.value) }}
//       />
//     {/* </form> */}
//     </>
//   );
// };

// const Wrapper = styled.div`
//   position: absolute;
//   z-index: 99;
// `;

// const StyledTextarea = styled(Input)`
//   width: 770px;
//   height: 500px;
//   font-size: 20px;
//   resize: none;
// `;

// export default WriteLetter;
import React, { useEffect, useState } from 'react';
import { Input, Label } from 'reactstrap';
import styled from 'styled-components';
import axiosConfig from '../utils/api/axiosConfig';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {useToggleStore} from "../stores/toggleStore";

const WriteLetter = () => {
  const {isToggled, toggle} = useToggleStore();
  const [message, setMessage] = useState("");
  // const {message, setMessage} = useMessageStore();
  // const [modal, setModal] = useState(false);
  // const toggle = () => setModal(!modal);
  useEffect(()=>{
    console.log("toggle: ", isToggled);
  },[isToggled])

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("편지가 등록되었습니다: ", message);
    setMessage("");
    toggle();
    // axiosConfig.post("/messages",{
    //   userId: ,
    //   content: letter,
    // }).then(res=>{
    //   console.log(res.data);
    // }).catch(err=>{console.log(err)})
  }
  return (
    <>
      <Modal isOpen={isToggled} toggle={toggle} centered size={"lg"}>
        <ModalHeader toggle={toggle}>To. 미진</ModalHeader>
        <ModalBody>
          <form onSubmit={onSubmit}>
            <Label for="exampleText">편지를 남겨주세요</Label>
            <StyledTextarea
              id="exampleText"
              name="text"
              type="textarea"
              placeholder="친구를 위한 편지를 작성해보세요!"
              required
              maxLength={50}
              autoFocus
              onChange={(e) => {
                console.log("onChange: ", e.target.value);
                setMessage(e.target.value);
              }}
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
        </ModalBody>
      </Modal>
    </>
  );
};

const StyledTextarea = styled(Input)`
  width: 100%;
  height: 500px;
  font-size: 20px;
  resize: none;
`;
const ButtonDiv = styled.div`
  width: fit-content;
  margin: auto;
  margin-top: 20px;
`;
export default WriteLetter;
