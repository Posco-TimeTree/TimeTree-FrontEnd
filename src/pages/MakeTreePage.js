import React from 'react';
import Canvas from '../components/Canvas';
import horseImg from '../img/horse.png';

const MakeTreePage = () => {
  return (
    <>
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <img
          src={horseImg}
          style={{
            width: "600px",
            height: "500px",
            position: "absolute",
            left: "-600px",
            zIndex: 1000
          }}
          alt='a'
        />
        <Canvas />
      </div>
    </>
  );
};

export default MakeTreePage;
