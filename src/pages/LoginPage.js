import React from 'react';
import styled from 'styled-components';
import BackgroundImg from "../img/loginImg.jpg";
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

const LoginPage = () => {
  return (
    <LoginWapper backgroundImg={BackgroundImg}>
      <motion.div
        layout
        animate={{ opacity: [0.1,1] }}
        transition={{
          opacity: { ease: "linear" },
          layout: { duration: 0.7 }
        }}>
        <LoginContainer>
          <LoginTitle>내 <span style={{color:'darkgreen'}}>트리</span>를 꾸며줘</LoginTitle>
          <Link to={"/main"}>
            <LoginBox>
              <LoginBtnText>로그인하기</LoginBtnText>
            </LoginBox>
          </Link>
        </LoginContainer>
      </motion.div>
    </LoginWapper>
  );
};

const LoginWapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-repeat : no-repeat;
  background-size : 100% 100%;
  display: flex;
  flex-direction: row;
  background-image: url(${(props) => props.backgroundImg});
`

const LoginContainer = styled.div`
  padding:10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out;
`
const LoginTitle = styled.div`
  text-align: center;
  font-size: 80px;
`

const LoginBox = styled.div`
  margin-top: 10px;
  width: 600px;
  height: 150px;
  background-color:#e9b000;
  color: white;
  border-radius: 20px;
  padding-top:40px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0px 2px 5px gray;
`
const LoginBtnText = styled.div`
  font-size: 45px;
`

export default LoginPage;