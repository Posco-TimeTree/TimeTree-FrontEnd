import React from 'react';
import { Route, Routes,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import MakeTreePage from '../pages/MakeTreePage';
import GiftPage from '../pages/GiftPage';
import OauthRedirect from './OAuthRedirect';
import PrivateRouter from './PrivateRouter';
import ThreeExample from '../pages/ThreeExample';
import AdVideoPlayer from './AdVideoPlayer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "../pageAnimation.css";

const AppRouter = () => {
  const location = useLocation();
    
  return (
    <div>
      <TransitionGroup  className="transitions-wrapper">
      <CSSTransition
        key={location.pathname}
        classNames={"right"}
        timeout={2000}
      >
      <Routes location={location}>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/gift-tree' element={<GiftPage/>}/>
          <Route path='/oauth/google/callback' element={<OauthRedirect/>}/>
          <Route path='/ad' element={<AdVideoPlayer/>}/>
          <Route element={<PrivateRouter/>}>
            <Route path='/main' element={<MainPage/>}/>
            <Route path='/make-my-tree' element={<MakeTreePage/>}/>
            <Route path='/three' element={<ThreeExample/>}/>
          </Route>
        </Routes>
      </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default AppRouter;