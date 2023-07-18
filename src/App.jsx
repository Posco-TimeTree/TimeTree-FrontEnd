import React from 'react';
import GlobalStyle from './styles/GlobalStyle'
import Canvas from './components/Canvas';
import AppRouter from './components/AppRouter';
export default function App() {
  return (
    <>
    <GlobalStyle />
    <div className="App">
      {/* <Canvas/> */}
      <AppRouter/>
    </div>
    </>
  );
}