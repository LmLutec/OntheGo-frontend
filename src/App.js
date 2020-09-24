import React from 'react';
import logo from './logo.svg';
import './App.css';
import OwnerContainer from './components/owners/OwnerContainer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
         <OwnerContainer/>
      
      </header>
    </div>
  );
}

export default App;
