import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Interval from './components/Interval/Interval';
import Average from './components/Math/Average';
import Sum from './components/Math/Sum';
import Sort from './components/Math/Sort';

function App() {
  return (
    <div className="App">
      <h1>React Redux exercise</h1>
      <div className='line'>
      <Cards title='Card ONE' red>REDzin</Cards>
      
      </div>
      <div className='line'>
      <Cards title='Card TWO' blue>BLUEzin</Cards>
      <Cards  title='Card THREE' green>GREENzin</Cards>
      <Cards title='Card FOUR' purple>PURPLEzin</Cards>
      </div>
      <div className='line'>
        <Interval />
      </div>
      <div className='line'>
        <Average />
        <Sum />
        <Sort />
      </div>
    </div>
  );
}

export default App;
