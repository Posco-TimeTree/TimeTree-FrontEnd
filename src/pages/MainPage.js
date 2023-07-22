import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Canvas from '../components/Canvas';
import SideBar from '../components/SideBar';
import {motion} from "framer-motion";
import styled from 'styled-components';
import BackgroundImg from "../img/loginImg.jpg";
import { LoginBox, LoginBtnText, LoginContainer, LoginWapper } from '../styles/MainBackground';
import { useUserStore } from '../stores';

const MainPage = () => {
  const {user, setUser} = useUserStore();
  console.log("main: ", user);
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
          <Link to={"/my-gift-tree"}>
            <LoginBox>
              <LoginBtnText>내 트리 확인하기</LoginBtnText>
            </LoginBox>
          </Link>
        </LoginContainer>
      </motion.div>
    </LoginWapper>
  );
};

export default MainPage;