import styled from 'styled-components';

export const LoginWapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-repeat : no-repeat;
  background-size : 100% 100%;
  display: flex;
  flex-direction: row;
  background-image: url(${(props) => props.backgroundImg});
`

export const LoginContainer = styled.div`
  padding:10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out;
`
export const LoginTitle = styled.div`
  text-align: center;
  font-size: 80px;
`

export const LoginBox = styled.div`
  margin-top: 10px;
  width: 600px;
  height: 120px;
  background-color:#e9b000;
  color: white;
  border-radius: 20px;
  padding-top:30px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0px 2px 5px gray;
`;
export const LoginBtnText = styled.div`
  font-size: 45px;
`;
export const Text = styled.div`
  font-size: 45px;
  text-align: center;
`;
export const BoxContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
`