import React from 'react';


const renderRow = (player, index) => (
  <li key={index}>
    <div className="name">{player.name}</div>
    <div className="salt">{player.salt}</div>
  </li>
);


const renderRows = players =>
  players.sort((a, b) => {
    if (a.salt === b.salt) {
      return 0;
    }
    return a.salt < b.salt ? 1 : -1;
  })
  .map((player, i) => renderRow(player, i));


export default ({ players }) => (
  <section className="component__SaltyMeter block">
    <header>
      <h1>Salt-y-Meter</h1>
    </header>
    <div className="content">
      <ul>
        {renderRows(players)}
      </ul>
    </div>
  </section>
);
