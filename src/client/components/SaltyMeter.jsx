import React from 'react';


const renderRow = (player, index) => (
  <li key={index}>
    <div className="name">{player.name}</div>
    <div className="score">{player.score}</div>
  </li>
);


export default ({ data }) => (
  <section className="component__SaltyMeter block">
    <header>
      <h1>Salt-y-Meter</h1>
    </header>
    <div className="content">
      <ul>
        {data.map(player => renderRow(player))}
      </ul>
    </div>
  </section>
);
