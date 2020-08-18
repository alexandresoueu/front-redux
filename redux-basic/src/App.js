import React from 'react';
import './App.css';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <h1>React Redux exercise</h1>
      <div className='line'>
      <Cards title='Card ONE' red>REDzin</Cards>
      <Cards title='Card TWO' blue>BLUEzin</Cards>
      </div>
      <div className='line'>
      <Cards  title='Card THREE' green>GREENzin</Cards>
      <Cards title='Card FOUR' purple>PURPLEzin</Cards>
      </div>
    </div>
  );
}

export default App;
