import React, { PropTypes } from 'react';
import PlayerSelector from './PlayerSelector';
import CharacterSelector from './CharacterSelector';
import ScoreSelector from './ScoreSelector';
import Characters from '../../../shared/characters';
import { mapFavorites } from '../../helpers';


const Player = (props) => {
  // base
  const base = {
    index: props.index,
  };

  // player selector
  const playerSelectorProps = {
    ...base,
    players: props.players,
    selection: props.selection.players,
    onUpdate: props.onPlayerUpdate,
  };

  // character selector
  const characterSelectorProps = {
    ...base,
    characters: [],
    favorites: [],
    selected: null,
    players: props.selection.players,
    onUpdate: props.onCharacterUpdate,
  };

  const selectedPlayer = props.selection.players[props.index];
  if (selectedPlayer) {
    const favorites = mapFavorites(selectedPlayer, Characters);
    if (favorites.length) {
      characterSelectorProps.favorites = favorites;
    }
    characterSelectorProps.disable = false;
    characterSelectorProps.characters = Characters;
    const selectedCharacter = props.selection.characters[props.index];
    if (selectedCharacter !== null) {
      characterSelectorProps.selected = selectedCharacter.code;
    }
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
  onPlayerUpdate: PropTypes.func,
  onCharacterUpdate: PropTypes.func,
  onScoreUpdate: PropTypes.func,
  selection: PropTypes.shape({
    players: PropTypes.arrayOf(PropTypes.object),
    characters: PropTypes.arrayOf(PropTypes.object),
    score: PropTypes.arrayOf(PropTypes.number),
  }),
};

export default Player;
