import React from "react";
import ReactDOM from "react-dom";
import PiGame from "pigame/PiGame";
import SnakesLaddersGame from "snakegame/SnakesLaddersGame"
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: caw-container</div>
    <PiGame />
    <SnakesLaddersGame />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
