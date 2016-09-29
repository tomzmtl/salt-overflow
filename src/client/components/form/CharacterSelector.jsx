import React from 'react';


const renderOption = (label, value, key) => {
  const optProps = {
    key,
  };

  if (value === false) {
    optProps.disabled = true;
  } else {
    optProps.value = value;
  }

  return (
    <option {...optProps}>
      {label}
    </option>
  );
};


export default ({ index, characters, players, onUpdate }) => {
  const handleChange = (e) => {
    const value = characters.find(c => c.code === e.target.value);
    onUpdate(index, value);
  };

  const mapCharacters = favorites => favorites.map((id) => {
    const character = characters.find(c => c.id === id);
    return [character.name, character.code];
  });


  const renderCharacterList = () => {
    let schema = [
      ['Choose character...', ''],
    ];

    if (players[index]) {
      const favorites = players[index].played_characters;

      if (favorites.length) {
        schema = schema.concat([
          ['Favorites', false],
          ...mapCharacters(favorites),
          ['All', false],
        ]);
      }
    }

    schema = schema.concat(mapCharacters(characters.map(c => c.id)));

    return schema.map((data, i) => renderOption(data[0], data[1], i));
  };

  return (
    <div className="component__CharacterSelector">
      <select onChange={handleChange}>
        {renderCharacterList()}
      </select>
    </div>
  );
};
