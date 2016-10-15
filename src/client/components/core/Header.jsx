import React from 'react';
import { Link } from 'react-router';


export default () => (
  <header className="main-header">
    <div className="logo">
      <Link to="/">
        <h1><span>Salt</span>Overflow</h1>
      </Link>
    </div>
    <div className="add-game">
      <Link to="/add" className="add-game">
        Add a game
      </Link>
    </div>
  </header>
);
