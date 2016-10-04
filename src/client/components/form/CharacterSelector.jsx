import React from 'react';
import OptGroup from '../core/OptGroup';
import Option from '../core/Option';


const findCharById = (characters, id) => characters.find(c => id === c.id);


const renderFavorites = (favorites) => {
  if (!favorites.length) {
    return null;
  }
  return <OptGroup label="Favorites" data={favorites} />;
};


export default ({ index, characters, players, onUpdate }) => {
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
    const data = characters.map(char => ({
      label: char.name,
      value: char.code,
    }));
    return <OptGroup label="All" data={data} />;
  };

  /* render() */

  return (
    <div className="component__CharacterSelector">
      <select onChange={handleChange} value="">
        <Option label="Choose character..." />
        {renderFavorites(favorites)}
        {renderAll()}
      </select>
    </div>
  );
};
