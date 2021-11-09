import React from "react";
import logo from "./foodtruck.png";
import "./App.css";
import OwnerContainer from "./containers/OwnerContainer";
import FoodieContainer from "./containers/FoodieContainer";

function App() {
  return (
    <div className="App">
      <h1 className="logo">Always On the Go</h1>
      <div className="appWrap">
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
