import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink, Switch} from 'react-router-dom'
import OwnerContainer from './containers/OwnerContainer'
import FoodieContainer from './containers/FoodieContainer'
// import OwnerInput from './components/owners/OwnerInput'
// import OwnerLogin from './components/owners/OwnerLogin'
// import Home from './components/owners/Home'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
        {/* <Route component={OwnerContainer}></Route> */}
      {/* <NavLink to="/owners">Owners</NavLink> */}
      {/* <Route exact path="/owners" component={OwnerContainer}/> */}
      {/* <Link to="/foodies">Foodies</Link> */}
      {/* <Route exact path="/foodies" component={FoodieContainer}/> */}
      <Switch>
        <OwnerContainer/>
      </Switch>
      <FoodieContainer />
        
      </header>
    </div>
  );
}

export default App;
