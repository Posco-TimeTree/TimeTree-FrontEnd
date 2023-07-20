import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleLight = () => {
  const [light, setLight] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleToggleLight = () => {
    setIsFading(true); 
    setTimeout(() => {
      setLight(!light);
      setIsFading(false);
    }, 500);
  };  
  
  return (
    <>
    <StyledBackground light={light} isFading={isFading}>
      <Button onClick={handleToggleLight}>버튼</Button>
    </StyledBackground>
    </>
  );
};

const StyledBackground = styled.div`
  poisition: absolute;
  top: 0; right: 0;
  z-index: 5;
  background-color: ${(props)=>props.light? "#938D8E": "#f8f8f8"};
  opacity: ${(props)=>props.isFading? 0.5: 1}
  width: 100vw;
  height: 100vh;
  transition: background-color 0.5s ease;
`;
const Button = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: red;
  color: white;
  padding: 15px;
`;
export default ToggleLight;