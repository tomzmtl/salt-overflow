import React from 'react';
import NumberSelector from './NumberSelector';
import PlayerSelector from './PlayerSelector';
import CharacterSelector from './CharacterSelector';


export default () => (
  <div>
    <div className="component__AddGameForm block">
      <PlayerSelector />
      <CharacterSelector />
      <NumberSelector numbers={[0, 1, 2]} />
    </div>
  </div>
);
