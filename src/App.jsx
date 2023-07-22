import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Canvas from './components/Canvas';
import AppRouter from './components/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';

const mp3Files = ['music1.mp3', 'music2.mp3', 'music3.mp3', 'music4.mp3']; // 필요에 따라 더 많은 mp3 파일을 추가하세요

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // mp3Files 배열에서 랜덤으로 mp3 파일을 선택합니다
    const randomIndex = Math.floor(Math.random() * mp3Files.length);
    const randomMp3 = mp3Files[randomIndex];
    setAudioUrl(`/${randomMp3}`);
  }, [isPlaying]);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <PlayButton isPlaying={isPlaying} onClick={togglePlay}>
          <img src={require('./img/music.png')} style={{ width: '40px' }} alt="재생 버튼" />
        </PlayButton>
        {isPlaying && (
          <div style={{ display: 'none' }}>
            <ReactPlayer url={audioUrl} playing />
          </div>
        )}
        <AppRouter />
      </div>
    </>
  );
}

const PlayButton = styled.button.attrs(props => ({
  isPlaying: props.isPlaying,
}))`
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 10;
  font-size: 30px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width:80px;
  height: 80px;
  border-radius: 100px;

  background-color: ${props => (props.isPlaying ? 'green' : 'red')};
  color: white;

  &:hover {
    background-color: ${props => (props.isPlaying ? 'darkgreen' : 'darkred')};
  }
`;
