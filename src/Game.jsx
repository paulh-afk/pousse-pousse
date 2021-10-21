import React, { Component } from 'react';

class Game extends Component {
  moovePiece(elementIndex) {
    const newArr = this.props.gameArray;

    newArr.splice(elementIndex, 1, '');
    newArr.splice(this.props.playerIndex, 1, this.props.gameArray[elementIndex]);

    this.props.setNewGameArray(newArr);
  }

  render() {
    return (
      <div className="game">
        {this.props.gameArray.map((value, index) => {
          return (
            <div
              key={index}
              id={value === '' ? 'moove-piece' : null}
              className="piece"
              onClick={() => this.moovePiece(index)}
            >
              {value !== '' ? value.toUpperCase() : <i className="fas fa-arrows-alt"></i>}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Game;
