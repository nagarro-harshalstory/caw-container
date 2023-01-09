import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GameSwitcher from "./components/GameSwitcher";

class App extends Component {

    render() {
        return (
            <GameSwitcher clickBtn={this.clickBtn}/>
        );
    };
}
ReactDOM.render(<App />, document.getElementById("app"));

// const App = () => (
//   <div className="container">
//     <div>Name: caw-container</div>
//     <GameSwitcher />
//     {/* <PiGame />
//     <SnakesLaddersGame /> */}
//   </div>
// );
// ReactDOM.render(<App />, document.getElementById("app"));