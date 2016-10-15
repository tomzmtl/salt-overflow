/* Add game form actions */


/**
 * Update score.
 * @param {number} index
 * @param {number} value
 * @return {function}
 */
export const updateScore = (index, value) => dispatch => dispatch({
  type: 'UPDATE_SCORE',
  index,
  score: value,
});


/**
 * Update player name.
 * @param {number} index
 * @param {object} value
 * @return {function}
 */
export const updatePlayer = (index, value) => dispatch => dispatch({
  type: 'UPDATE_PLAYER',
  index,
  player: value,
});


/**
 * Update character.
 * @param {number} index
 * @param {object} value
 * @return {function}
 */
export const updateCharacter = (index, value) => dispatch => dispatch({
  type: 'UPDATE_CHARACTER',
  index,
  character: value,
});
