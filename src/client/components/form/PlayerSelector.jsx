import React from 'react';


const renderOption = (player, i) => (
  <option key={i} value={player.id}>
    {player.name}
  </option>
);


export default ({ index, players, onUpdate }) => {
  const handleChange = (e) => {
    const value = players.find(c => c.id === e.target.value);
    onUpdate(index, value);
  };
  return (
    <div className="component__PlayerSelector">
      <select onChange={handleChange}>
        <option value="">Choose player...</option>
        {players.map(renderOption)}
      </select>
    </div>
  );
};
