import React, { PropTypes } from 'react';


const PlayerSelector = ({ index, players, onUpdate, selection }) => {
  const handleChange = (e) => {
    const value = players.find(c => c.id === e.target.value);
    onUpdate(index, value);
  };

  const renderOption = (player, i) => {
    const altIndex = index === 0 ? 1 : 0;
    const prps = {};

    if (selection[altIndex] && player.id === selection[altIndex].id) {
      prps.disabled = true;
    } else {
      prps.value = player.id;
    }

    return (
      <option key={i} {...prps}>
        {player.name}
      </option>
    );
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


PlayerSelector.propTypes = {
  index: PropTypes.number,
  players: PropTypes.arrayOf(PropTypes.object),
  onUpdate: PropTypes.func,
  selection: PropTypes.arrayOf(PropTypes.object),
};


export default PlayerSelector;
