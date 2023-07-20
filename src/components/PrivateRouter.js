import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
  const token = localStorage.getItem("refresh_token");
  const navigate = useNavigate();
  // if(!token){
  //   setTimeout(()=>navigate(-1),1000);
  // }
  return (
    <div>
        <Outlet/>
    </div>
  );
};

export default PrivateRouter;