import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const PrivateRouter = ({children}) => {
  const token = localStorage.getItem("refresh_token");
  const navigate = useNavigate();
  // if(!token){
  //   setTimeout(()=>navigate(-1),1000);
  // }
  return (
    <div>
        <Outlet/>
        <StyledButton size='lg' color="danger">로그아웃</StyledButton>
    </div>
  );
};
const StyledButton = styled(Button)`
  position: absolute;
  top: 5%; 
  right: 10%;
   
`;
export default PrivateRouter;