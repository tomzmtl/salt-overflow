export const updateScore = (index, value) => dispatch => dispatch({
  type: 'UPDATE_SCORE',
  index,
  score: value,
});


export const updatePlayer = (index, value) => dispatch => dispatch({
  type: 'UPDATE_SCORE',
  index,
  player: value,
});
