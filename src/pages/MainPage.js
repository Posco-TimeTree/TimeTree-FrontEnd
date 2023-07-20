import React from 'react';
import { Link } from 'react-router-dom';
import Canvas from '../components/Canvas';
import SideBar from '../components/SideBar';
import {motion} from "framer-motion";
import styled from 'styled-components';
import BackgroundImg from "../img/loginImg.jpg";

const MainPage = () => {
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
          <Link to={"/make-my-tree"}>
            <LoginBox>
              <LoginBtnText>나만의 트리 꾸미러 가기</LoginBtnText>
            </LoginBox>
          </Link>
          <Link to={"/gift-tree"}>
            <LoginBox>
              <LoginBtnText>내 트리 확인하기</LoginBtnText>
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
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out;
`
const LoginTitle = styled.div`
  text-align: center;
  font-size: 80px;
`

const LoginBox = styled.div`
  margin-top: 30px;
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

export default MainPage;