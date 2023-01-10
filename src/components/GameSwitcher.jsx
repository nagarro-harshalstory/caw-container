import React, { Component, useState } from 'react';
import PiGame from "pigame/PiGame";
import SnakesLaddersGame from "snakegame/SnakesLaddersGame";
  
class GameSwitcher extends Component {

    state = {
        renderView: 1
    };

    clickBtn = e => {
        console.log(e.target.value);
        this.setState({
            renderView: e.target.value
        });
    };

    render() {
        return (
            <div className="switcher">
                <nav className="navigation">
                    <button value={1} onClick={this.clickBtn} className="button">Pi Game</button>
                    <button value={2} onClick={this.clickBtn} className="button">Snakes & Ladders Game</button>
                </nav>
                <div className="gameboard">
                    {/* {this.state.renderView == 1 && <PiGame className={`${this.state.renderView == 1 ? "show" : "noshow"}`}/>}
                    {this.state.renderView == 2 && <SnakesLaddersGame className={`${this.state.renderView == 2 ? "show" : "noshow"}`}/>} */}
                    {this.state.renderView == 2 ? (<SnakesLaddersGame />) : (<PiGame />)}
                </div>
                
            </div>
        )
    };
}

export default GameSwitcher;