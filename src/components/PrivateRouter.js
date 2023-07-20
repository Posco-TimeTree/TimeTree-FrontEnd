import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import ModalCom from './ModalCom';

const PrivateRouter = ({children}) => {
  const token = localStorage.getItem("refresh_token");
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();
  // if(!token){
  //   setTimeout(()=>navigate(-1),1000);
  // }
  // const [toggle, setToggle] = useState(true);
  const toggle = ()=>setLogout(false);
  useEffect(()=>{
    if(logout){
      setTimeout(() => {
        setLogout(false);
        navigate("/main");
      }, 1500);
    }
  },[logout]);

  return (
    <div>
        <Outlet/>
        <StyledButton size='lg' color="danger" onClick={()=>setLogout(true)}>로그아웃</StyledButton>
        {logout && <ModalCom isOpen={logout} toggle={toggle} body={"로그아웃 되었습니다"}/>}
    </div>
  );
};
const StyledButton = styled(Button)`
  position: absolute;
  top: 5%; 
  right: 10%;
   
`;
export default PrivateRouter;