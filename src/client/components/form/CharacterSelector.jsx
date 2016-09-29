import React from 'react';


const renderOption = (character, i) => (
  <option key={i} value={character.code}>
    {character.name}
  </option>
);


export default ({ characters, onUpdate }) => (
  <div className="component__CharacterSelector">
    <select>
      {characters.map(renderOption)}
    </select>
  </div>
);
