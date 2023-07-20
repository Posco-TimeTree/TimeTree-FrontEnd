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

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/gift-tree' element={<GiftPage/>}/>
          <Route path='/oauth/google/callback' element={<OauthRedirect/>}/>

          <Route element={<PrivateRouter/>}>
            <Route path='/main' element={<MainPage/>}/>
            <Route path='/make-my-tree' element={<MakeTreePage/>}/>
            <Route path='/three' element={<ThreeExample/>}/>
          </Route>
        </Routes>
        <Route path='/ad' elemen={<AdVideoPlayer/>}/>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;