import React from 'react';
import './App.css';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <h1>React Redux exercise</h1>
      <div className='line'>
      <Cards />
      <Cards />
      <Cards />
      </div>
    </div>
  );
}

export default App;
