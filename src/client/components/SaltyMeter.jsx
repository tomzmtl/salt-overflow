import React from 'react';


const renderRow = (player, index) => (
  <li key={index}>
    <div className="name">{player.name}</div>
    <div className="score">{player.salt}</div>
  </li>
);


export default ({ players }) => (
  <section className="component__SaltyMeter block">
    <header>
      <h1>Salt-y-Meter</h1>
    </header>
    <div className="content">
      <ul>
        {players.map((player, i) => renderRow(player, i))}
      </ul>
    </div>
  </section>
);
