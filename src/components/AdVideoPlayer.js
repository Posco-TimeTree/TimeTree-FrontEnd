import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const VideoPlayer = (props) => {
  const [showCancelButton, setShowCancelButton] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowCancelButton(true);
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleCancelButtonClick = () => {
    setShowCancelButton(false);
    props.onVideoEnd();
  };

  return (
    <div>
      <ReactPlayer
        url="/ad.mp4" // 여기에 MP4 파일의 URL을 입력합니다.
        playing // 자동으로 재생
        controls // 재생 컨트롤러 표시
        width="640px" // 동영상 플레이어의 너비
        height="360px" // 동영상 플레이어의 높이
      />
      {showCancelButton && (
        <CancleButton onClick={handleCancelButtonClick}>Skip Ad</CancleButton>
      )}
    </div>
  );
};

export default VideoPlayer;

const CancleButton = styled.button`
  width: 220px;
  height: 75px;
  font-size: 30px;
  color: white;
  position: absolute;
  top: 200px;
  left: 420px;
  background-color: rgba(128, 128, 128, 0.5);
`
