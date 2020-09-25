import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route} from 'react-router-dom'
import OwnerContainer from './components/owners/OwnerContainer'
// import OwnerInput from './components/owners/OwnerInput'
// import OwnerLogin from './components/owners/OwnerLogin'
// import Home from './components/owners/Home'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <Route component={OwnerContainer}></Route>
       
      
        
      </header>
    </div>
  );
}

export default App;
