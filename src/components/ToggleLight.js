import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleLight = () => {
  const [light, setLight] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const onToggleLight = ()=>{
    console.log("불 토글");
    setLight(!light);
  }
  const handleToggleLight = () => {
    setIsFading(true); // Set isFading to true to enable fade-in/fade-out animation
    setTimeout(() => {
      onToggleLight(); // Call the function to toggle the light after a short delay
      setIsFading(false); // Set isFading back to false to disable the animation
    }, 500); // The same duration as the transition in milliseconds
  };  return (
    <>
    <StyledBackground light={light} isFading={isFading}>
    <button onClick={handleToggleLight}>버튼</button>
    </StyledBackground>
    {/* {light ? <StyledBackground isFading = {isFading}>
      <button onClick={onToggleLight} style={{color: "white"}}>버튼</button>
    </StyledBackground>:
      <button onClick={handleToggleLight} style={{backgroundColor: "#212121"}}>버튼</button>
    } */}
    </>
  );
};

const StyledBackground = styled.div`
  background-color: ${(props)=>props.light? "#f8f8f8": "#938D8E"};
  // opacity: 0.5;
  opacity: ${(props)=>props.isFading? 0.5: 1}
  width: 100vw;
  height: 100vh;
  transition: background-color 0.5s ease;
`;
export default ToggleLight;