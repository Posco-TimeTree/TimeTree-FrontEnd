import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './music.css';

const App = () => {
  const audioUrl = '/IU.mp3';
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="app">
      <button className={isPlaying ? 'stop-button' : 'play-button'} onClick={togglePlay}>
        {isPlaying ? 'OFF' : 'ON'}
      </button>
      {isPlaying && (
        <div style={{ display: 'none' }}>
          <ReactPlayer url={audioUrl} playing />
        </div>
      )}
    </div>
  );
};

export default App;
