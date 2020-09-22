import React from 'react';
import logo from './logo.svg';
import './App.css';
import OwnerContainer from './components/owners/OwnerContainer'
import OwnerLogin from './components/owners/OwnerLogin'
import OwnerInput from './components/owners/OwnerInput'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/owners/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Router>
          <Route exact path="/login" component={<OwnerLogin/>}></Route><br/>
          <Route exact path="/new/owner" component={<OwnerInput/>}></Route> */}
          {/* <Route exact path="/" component={<Home/>}></Route> */}
        {/* </Router> */}
         <OwnerContainer/>
      
      </header>
    </div>
  );
}

export default App;
