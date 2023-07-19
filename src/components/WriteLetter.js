import React, { useState } from 'react';
import { Input, Label } from 'reactstrap';
import styled from 'styled-components';
import axiosConfig from '../utils/api/axiosConfig';

const WriteLetter = () => {
  const [letter, setLetter] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("편지가 등록되었습니다: ", letter);
    // axiosConfig.post("/messages",{
    //   userId: ,
    //   content: letter,
    // }).then(res=>{
    //   console.log(res.data);
    // }).catch(err=>{console.log(err)})
  }
// 모달로 메세지 창 띄워서 제출
  return (
    <>
      <Label for="exampleText">
        Text Area
      </Label>
      <Input
        id="exampleText"
        name="text"
        type="textarea"
      />
    </>
    // <Wrapper>
    //   <form onSubmit={onSubmit}>
    //     <StyledTextarea
    //       name='letter'
    //       value={letter}
    //       placeholder="친구를 위한 편지를 작성해보세요!"
    //       required
    //       maxLength={50}
    //       autoFocus
    //       onChange={(e) => { setLetter(e.target.value) }}
    //     />
    //     <button>편지쓰기</button>
    //   </form>
    // </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  z-index: 99;
`;

const StyledTextarea = styled.textarea`
  width: 300px;
  height: 500px;
  font-size: 20px;
  resize: none;
`;
const StyledButton = styled.button`

`;

export default WriteLetter;
