import React from 'react';
import './App.css';
import Topbar from './Topbar';
import Middleline from './Middleline';
import Rectangle from './rectangle/Rectangle';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Middleline/>
      <Rectangle/>
    </div>
      
  );
}

export default App;
