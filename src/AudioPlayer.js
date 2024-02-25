import React, { useState, useEffect } from 'react';
import './AudioPlayer.css'

const AudioPlayer = ({ audioList }) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  useEffect(() => {
    // Your logic for handling audio changes and playback
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleBack = () => {
    // Your logic for going back to the previous track
    setCurrentTrack((prevTrack) => (prevTrack > 0 ? prevTrack - 1 : audioList.length - 1));
  };

  const handleNext = () => {
    // Your logic for going to the next track
    setCurrentTrack((prevTrack) => (prevTrack < audioList.length - 1 ? prevTrack + 1 : 0));
  };

  return (
    <div className='playDesign'>
      <audio ref={audioRef} src={audioList[currentTrack].url} />
      <button onClick={handleBack}>Back</button>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default AudioPlayer;
