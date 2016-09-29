import React from 'react';


const renderOption = (character, i) => (
  <option key={i} value={character.code}>
    {character.name}
  </option>
);


export default ({ index, characters, onUpdate }) => {
  const handleChange = (e) => {
    const value = characters.find(c => c.code === e.target.value);
    onUpdate(index, value);
  };
  return (
    <div className="component__CharacterSelector">
      <select onChange={handleChange}>
        <option value="">Choose character...</option>
        <option disabled>Favorites</option>
        <option disabled>All</option>
        {characters.map(renderOption)}
      </select>
    </div>
  );
};
