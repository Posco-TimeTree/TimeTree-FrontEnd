import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import MakeTreePage from '../pages/MakeTreePage';
import GiftPage from '../pages/GiftPage';
import ToggleLight from './ToggleLight';

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/main' element={<MainPage/>}/>
          <Route path='/make-my-tree' element={<MakeTreePage/>}/>
          <Route path='/gift-tree' element={<GiftPage/>}/>
          <Route path='/test' element={<ToggleLight/>}/>

          {/* <Route path='/oauth/google/callback' element={<OAuthRedirect/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;