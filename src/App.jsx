import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle'
import Canvas from './components/Canvas';
import AppRouter from './components/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioUrl = '../public/IU.mp3';
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
    <GlobalStyle />
    <div className="App">
    <PlayButton className={isPlaying ? 'stop-button' : 'play-button'} onClick={togglePlay}>
        <img src={require('./img/music.png')} style={{width: "40px"}}/>
      </PlayButton>
      {isPlaying && (
        <div style={{ display: 'none' }}>
          <ReactPlayer url={audioUrl} playing />
        </div>
      )}
      <AppRouter/>
    </div>
    </>
  );
}

const PlayButton = styled.button`
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