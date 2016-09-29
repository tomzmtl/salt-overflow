import React from 'react';


const renderOption = (player, i) => (
  <option key={i}>
    {player.name}
  </option>
);


export default ({ players, onUpdate }) => (
  <div className="component__PlayerSelector">
    <select>
      {players.map(renderOption)}
    </select>
  </div>
);
