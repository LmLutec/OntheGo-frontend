import React from "react";
import "./App.css";
import OwnerContainer from "./containers/OwnerContainer";
import FoodieContainer from "./containers/FoodieContainer";
import Paper from "./Paper";

function App() {
  return (
    <div className="App">
      <h1 className="logo">Always On the Go</h1>
      <div className="appWrap">
        <section className="main">
          <div className="container">
            <OwnerContainer />
          </div>
          <div className="container">
            <FoodieContainer />
          </div>
        </section>
      </div>
      {/* <Paper /> */}
    </div>
  );
}

export default App;
