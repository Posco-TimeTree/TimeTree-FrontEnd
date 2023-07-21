import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const VideoPlayer = () => {
  const [showCancelButton, setShowCancelButton] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowCancelButton(true);
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <ReactPlayer
        url="/ad.mp4" // 여기에 MP4 파일의 URL을 입력합니다.
        playing // 자동으로 재생
        controls // 재생 컨트롤러 표시
        width="1280px" // 동영상 플레이어의 너비
        height="720px" // 동영상 플레이어의 높이
      />
    </div>
  );
};

export default VideoPlayer;
