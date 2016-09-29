export const updateScore = (index, value) => dispatch => dispatch({
  type: 'UPDATE_SCORE',
  index,
  score: value,
});


export const updatePlayer = (index, value) => dispatch => dispatch({
  type: 'UPDATE_PLAYER',
  index,
  player: value,
});


export const updateCharacter = (index, value) => dispatch => dispatch({
  type: 'UPDATE_CHARACTER',
  index,
  character: value,
});
