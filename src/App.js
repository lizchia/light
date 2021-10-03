import React from 'react'
import './App.css';
import Left from './component/Left'
import Mid from './component/Mid'
import Right from './component/Right'
import soundtrack from './Nightingale.mp3'

function App() {
  
    
  return (
    <>
    <div className="App">
      <header className="App-header">
        <audio src={soundtrack} type='audio/mpeg' autoPlay controls/>
        <Left/>
        <Mid/>
        <Right/>
      </header>
    </div>
    </>
  );
}

export default App;
