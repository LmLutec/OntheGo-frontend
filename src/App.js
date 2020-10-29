import React from 'react';
import logo from './foodtruck.png'
import './App.css';
import OwnerContainer from './containers/OwnerContainer'
import FoodieContainer from './containers/FoodieContainer'




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Always on the go</h1>
        <img src={logo} className="App-logo" alt="logo" /><br/><br/>
   

       
      <FoodieContainer />
      <OwnerContainer />
      </header>
    


    </div>
  );
}

export default App;
