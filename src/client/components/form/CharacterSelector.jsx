import React, { PropTypes } from 'react';
import OptGroup from '../core/OptGroup';
import Option from '../core/Option';


const findCharById = (characters, id) => characters.find(c => id === c.id);


const renderFavorites = (favorites) => {
  if (!favorites.length) {
    return null;
  }
  return <OptGroup label="Favorites" data={favorites} />;
};


const CharacterSelector = ({ index, characters, players, onUpdate }) => {
  /* Events */

  const handleChange = (e) => {
    const value = characters.find(c => c.code === e.target.value);
    onUpdate(index, value);
  };

  /* Shortcuts */

  let favorites = [];

  if (players[index]) {
    const ids = players[index].played_characters;
    favorites = ids.map((id) => {
      const char = findCharById(characters, id);
      return {
        label: char.name,
        value: char.code,
      };
    });
  }

  /* All */

  const renderAll = () => {
    const all = characters.map(char => ({
      label: char.name,
      value: char.code,
    }));
    if (favorites.length) {
      return <OptGroup label="All" data={all} />;
    }
    return all.map((opt, i) => <Option {...opt} key={i} />);
  };

  /* render() */

  // define selected value
  let selection;
  if (favorites.length) {
    selection = favorites[0].value;
  }

  return (
    <div className="component__CharacterSelector">
      <select onChange={handleChange} value={selection}>
        <Option label="Choose character..." />
        {renderFavorites(favorites)}
        {renderAll()}
      </select>
    </div>
  );
};


CharacterSelector.propTypes = {
  index: PropTypes.number,
  characters: PropTypes.arrayOf(PropTypes.object),
  players: PropTypes.arrayOf(PropTypes.object),
  onUpdate: PropTypes.func,
};


export default CharacterSelector;
