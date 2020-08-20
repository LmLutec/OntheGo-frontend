import React from 'react';
import logo from './logo.svg';
import './App.css';
import OwnerContainer from './components/owners/OwnerContainer'
import { BrowserRouter as Router, Route,Switch, Redirect, NavLink, Link} from 'react-router-dom'
import TruckContainer from './components/trucks/TruckContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Router>
          <Link to="/owner">Truck Owners</Link>
          <Route exact path="/owner" component={OwnerContainer}></Route><br/>
          <Link to="/">Home</Link>
          <Redirect to="/" />
          </Router>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
         {/* create owners nav link that leads to owners container */}
        
        
         {/* <Router>
         <NavLink to="/owner">Truck Owners</NavLink>
          <Route exact path="/owner" component={OwnerContainer}></Route><br/>
         </Router> */}

{/* 
      <Router>
      <Switch>
        <Route exact path="/owner" component={OwnerContainer} /> */}
        {/* <Route exact path="/"> */}
          {/* <Redirect to="/" /> */}
        {/* </Route> */}
      {/* </Switch>
      </Router> */}

      </header>
    </div>
  );
}

export default App;
