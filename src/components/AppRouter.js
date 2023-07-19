import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import MakeTreePage from '../pages/MakeTreePage';
import GiftPage from '../pages/GiftPage';

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/make-my-tree' element={<MakeTreePage/>}/>
          <Route path='/gift-tree' element={<GiftPage/>}/>
          {/* <Route path='/oauth/google/callback' element={<OAuthRedirect/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;