import React from 'react';
// import logo from './logo.svg';
import logo from './public/foodtruck.png'
import './App.css';
import OwnerContainer from './containers/OwnerContainer'
import FoodieContainer from './containers/FoodieContainer'




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   

       
      <FoodieContainer />
      <OwnerContainer />
      </header>
    


    </div>
  );
}

export default App;
