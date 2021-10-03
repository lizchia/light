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
        <Left/>
        <Mid/>
        <Right/>       
      </header>
      <audio src={soundtrack} type='audio/mpeg' autoPlay controls/>
    </div>
    </>
  );
}

export default App;
