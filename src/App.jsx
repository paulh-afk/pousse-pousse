import React, { Component } from 'react';
import Array from './Array';

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
  randomAlphabetArray() {
    const arr = [];
    for (let i = 0; i < alphabetArray.length; i++) {
      // random alphabet array
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      gameArray: alphabetArray.slice(),
    };
  }

  render() {
    console.log(this.state.gameArray);
    return (
      <div className="container">
        <h3>Jeu du pousse pousse</h3>
        <Array gameArray={this.state.alphabetArray} />
      </div>
    );
  }
}

export default App;
