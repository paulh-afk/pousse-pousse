import React, { Component } from 'react';
import Header from './Components/Header';
import Game from './Game';

const alphabetArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '.',
  '',
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameArray: alphabetArray.slice(),
      playerIndex: 0,
    };
  }

  randomAlphabetArray() {
    const arr = [];
    for (let i = 0; i < alphabetArray.length; i++) {
      // random alphabet array
    }
  }

  changePlayerIndex = (index) => {
    this.setState({ playerIndex: index });
  };

  setNewArray = (arr) => {
    this.setState({ gameArray: arr });
  };

  render() {
    return (
      <div className="container">
        <Header gameArray={this.state.gameArray} />
        <Game gameArray={this.state.gameArray} setNewGameArray={this.setNewArray} />
      </div>
    );
  }
}

export default App;
