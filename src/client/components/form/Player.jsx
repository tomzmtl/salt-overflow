import React, { PropTypes } from 'react';
import PlayerSelector from './PlayerSelector';
import CharacterSelector from './CharacterSelector';
import ScoreSelector from './ScoreSelector';


const Player = (props) => {
  // base
  const base = {
    index: props.index,
  };

  // player selector
  const playerSelectorProps = Object.assign({}, base, {
    players: props.players,
    selection: props.selection.players,
    onUpdate: props.onPlayerUpdate,
  });

  // character selector
  const characterSelectorProps = Object.assign({}, base, {
    characters: props.characters,
    players: props.selection.players,
    onUpdate: props.onCharacterUpdate,
    disable: true,
  });

  if (props.selection.players[props.index]) {
    characterSelectorProps.disable = false;
  }

  // score selector
  const scoreSelectorProps = Object.assign({}, base, {
    numbers: [0, 1, 2],
    score: props.selection.score[props.index],
    onUpdate: props.onScoreUpdate,
  });

  // render
  return (
    <div className="component__Player">
      <PlayerSelector {...playerSelectorProps} />
      <CharacterSelector {...characterSelectorProps} />
      <ScoreSelector {...scoreSelectorProps} />
    </div>
  );
};

Player.propTypes = {
  index: PropTypes.number,
  players: PropTypes.arrayOf(PropTypes.object),
  characters: PropTypes.arrayOf(PropTypes.object),
  onPlayerUpdate: PropTypes.func,
  onCharacterUpdate: PropTypes.func,
  onScoreUpdate: PropTypes.func,
  selection: PropTypes.shape({
    players: PropTypes.arrayOf(PropTypes.object),
    score: PropTypes.arrayOf(PropTypes.number),
  }),
};

export default Player;
