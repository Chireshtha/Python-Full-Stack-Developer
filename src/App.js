// App.js
import React from 'react';
import AudioPlayer from './AudioPlayer';

const audioList = [
  { url: './Track1.mp3' },
  { url: './Track3.mp3' },
  { url: './Track5.mp3' },
  // Add more audio URLs as needed
];

function App() {
  return (
    <div className="App">
      <AudioPlayer audioList={audioList} />
    </div>
  );
}

export default App;
