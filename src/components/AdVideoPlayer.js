import React, { useState, useEffect } from 'react';
import { Modal } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const AdVideoPlayer = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showCancelButton, setShowCancelButton] = useState(false);

  useEffect(() => {
    let timeoutId;

    // 동영상 재생 시, 5초 후에 종료 버튼을 보여주기 위한 타이머 설정
    if (showVideo) {
      timeoutId = setTimeout(() => {
        setShowCancelButton(true);
      }, 5000); // 5초 후에 종료 버튼 보여줌
    }

    // 컴포넌트가 언마운트될 때 타이머 제거
    return () => clearTimeout(timeoutId);
  }, [showVideo]);

  const handlePlayButtonClick = () => {
    setShowVideo(true);
  };

  const handleCancelButtonClick = () => {
    setShowVideo(false);
    setShowCancelButton(false);
  };

  return (
    <div>
      {/* {!showVideo && (
        <button onClick={handlePlayButtonClick}>동영상 재생</button>
      )} */}

<button onClick={handlePlayButtonClick}>동영상 재생</button>

      {showVideo && (
        <VideoModal>
          <video controls>
            {/* 동영상 URL 또는 재생할 동영상 파일 경로를 지정 */}
            <source src="/gameAd.mp4" type="gameAd/mp4" />
            {/* 다른 형식의 동영상을 지원하려면 여기에 추가 가능 */}
          </video>
          {showCancelButton && (
            <button onClick={handleCancelButtonClick}>종료</button>
          )}
        </VideoModal>
      )}
    </div>
  );
};

const VideoModal = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`

export default AdVideoPlayer;
