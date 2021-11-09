import React from "react";
import logo from "./foodtruck.png";
import "./App.css";
import OwnerContainer from "./containers/OwnerContainer";
import FoodieContainer from "./containers/FoodieContainer";

function App() {
  return (
    <div className="App">
      <div className="appWrap">
        <header className="App-header">
          <h1>Always On the Go</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <section className="main">
          <div className="container">
            <FoodieContainer />
          </div>
          <div className="container">
            <OwnerContainer />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
