import React from 'react';
import PlayerSelector from './PlayerSelector';
import CharacterSelector from './CharacterSelector';
import ScoreSelector from '../../containers/ScoreSelector';

export default ({ index, score, onScoreUpdate, players }) => (
  <div className="component__Player">
    <PlayerSelector index={index} />
    <CharacterSelector index={index} />
    <ScoreSelector index={index} />
  </div>
);
