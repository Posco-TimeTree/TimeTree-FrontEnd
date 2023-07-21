import React from 'react';
import BackgroundImg from "../img/loginImg.jpg";
import {motion} from "framer-motion";
import { naverAuthUrl } from '../utils/auth/auth';
import { LoginBox, LoginBtnText, LoginContainer, LoginWapper, LoginTitle } from '../styles/MainBackground';

const LoginPage = () => {
  const handleAuthNaver = () => {
    window.location.assign(naverAuthUrl);
  };
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
          <LoginTitle>내 <span style={{color:'darkred'}}>산타</span>가 되어줘</LoginTitle>
          <button onClick={handleAuthNaver}>
            <LoginBox>
              <LoginBtnText>네이버로 로그인하기</LoginBtnText>
            </LoginBox>
          </button>
        </LoginContainer>
      </motion.div>
    </LoginWapper>
  );
};

export default LoginPage;