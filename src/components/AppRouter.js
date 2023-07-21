import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import MakeTreePage from '../pages/MakeTreePage';
import GiftPage from '../pages/GiftPage';
import OauthRedirect from './OAuthRedirect';
import PrivateRouter from './PrivateRouter';
import ThreeExample from '../pages/ThreeExample';
import AdVideoPlayer from './AdVideoPlayer';
import CompletePage from '../pages/CompletePage';

const AppRouter = () => {
  // 토큰이 있고 유저정보가 저장되어 있으면 본인 giftpage 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/gift-tree/:id/:code' element={<GiftPage/>}/>
          <Route path='/oauth/naver/callback' element={<OauthRedirect/>}/>
          <Route path='/ad' elemen={<AdVideoPlayer/>}/>

          <Route element={<PrivateRouter/>}>
            <Route path='/main' element={<MainPage/>}/>
            <Route path='/make-my-tree' element={<MakeTreePage/>}/>
            <Route path='/three' element={<ThreeExample/>}/>
            <Route path='/complete' element={<CompletePage/>}/>
            <Route path='/my-gift-tree' element={<GiftPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;