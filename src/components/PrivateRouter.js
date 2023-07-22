import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import { useUserStore } from '../stores';
import { deleteCookie, getCookie } from '../utils/auth/cookies';
import ModalCom from './ModalCom';

const PrivateRouter = ({children}) => {
  const storage = getCookie("userStore");
  // const token = storage.token;
  const [logout, setLogout] = useState(false);
  const {user, setUser} = useUserStore();

  if(user.id === 0 && storage){
    setUser({
      id: storage.id,
      name: storage.name,
      email: storage.email,
      token: storage.token,
    });
  }
  const navigate = useNavigate();

  if(!storage){
    setTimeout(()=>navigate("/"), 500);
  }

  const toggle = ()=>setLogout(false);

  useEffect(()=>{
    if(logout){
      setTimeout(() => {
        setLogout(false);
        deleteCookie("userStore");
        setUser({
          id: 0,
          name: "",
          email: "",
          token: ""
        });
        navigate("/");
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