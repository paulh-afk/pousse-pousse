import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>Jeu du pousse pousse</h1>
      <button onClick={props.setGameArray}>Jouer</button>
    </header>
  );
};

export default Header;
