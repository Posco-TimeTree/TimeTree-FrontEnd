import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackgroundImg from '../img/loginImg.jpg';
import { LoginBox, LoginBtnText, LoginContainer, LoginWapper, Text, BoxContainer } from '../styles/MainBackground';
import { v4 as uuidv4 } from 'uuid'; 
import { useUserStore } from "../stores";

const CompletePage = () => {
  const {user} = useUserStore();

  const generateRandomLink = () => {
    const randomLink = uuidv4(); 
    const url = `${window.location.origin}/gift-tree/${user.id}/${randomLink}?name=${user.name}`;

    // 클립보드에 복사
    navigator.clipboard.writeText(url).then(() => {
      console.log('링크가 클립보드에 복사되었습니다. 공유해주세요!');
    });
  };

  return (
    <LoginWapper backgroundImg={BackgroundImg}>
      <motion.div
        layout
        animate={{ opacity: [0.1, 1] }}
        transition={{
          opacity: { ease: 'linear' },
          layout: { duration: 0.7 },
        }}>
        <LoginContainer>
            <Text>예쁘게 꾸미셨네요!</Text>
            <Text>트리에 선물이 쌓이는 것을 지켜봐주세요!</Text>
            <BoxContainer>
              <button onClick={generateRandomLink}>
                <LoginBox>
                  <LoginBtnText>링크 복사하기</LoginBtnText>
                </LoginBox>
              </button>
              <Link to={'/main'}>
                <LoginBox>
                  <LoginBtnText>메인으로 돌아가기</LoginBtnText>
                </LoginBox>
              </Link>
          </BoxContainer>
        </LoginContainer>
      </motion.div>
    </LoginWapper>
  );
};

export default CompletePage;
