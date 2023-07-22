import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import { useUserStore } from '../stores';
import { deleteCookie, getCookie } from '../utils/auth/cookies';
import ModalCom from './ModalCom';

const PrivateRouter = ({children}) => {
  // const token = getCookie("token");
  const storage = JSON.parse(localStorage.getItem("userStore"));
  console.log(storage);
  const token = storage.user.token;
  const [logout, setLogout] = useState(false);
  const {setUser} = useUserStore();
  const navigate = useNavigate();
  if(!token){
    setTimeout(()=>navigate(-1), 500);
  }

  const toggle = ()=>setLogout(false);

  useEffect(()=>{
    if(logout){
      setTimeout(() => {
        setLogout(false);
        deleteCookie("token");
        setUser({
          userId: 0,
          name: "",
          email: "",
        });
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