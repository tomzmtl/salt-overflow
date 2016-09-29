import React from 'react';
import PlayerSelector from '../../containers/PlayerSelector';
import CharacterSelector from './CharacterSelector';
import ScoreSelector from '../../containers/ScoreSelector';

export default ({ index }) => (
  <div className="component__Player">
    <PlayerSelector index={index} />
    <CharacterSelector index={index} />
    <ScoreSelector index={index} />
  </div>
);
