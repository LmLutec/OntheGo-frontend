import React from 'react';
import logo from './logo.svg';
import './App.css';
import OwnerContainer from './components/owners/OwnerContainer'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import TruckContainer from './components/trucks/TruckContainer';
// import Home from './components/owners/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Router>
            <NavLink to="/owners">Truck Owners</NavLink>
            <Route exact path="/owners" render={()=> <OwnerContainer/>}/><br/>
          </Router>       



      </header>
    </div>
  );
}

export default App;
