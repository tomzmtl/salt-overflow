export default null;


/**
 * Assess the validity of a game form dataset.
 * @param {array} playerIds
 * @param {array} characters
 * @param {array} score
 * @return {boolean}
 */
export const isFormValid = (playerIds, characters, score) => {
  if ([
    ...playerIds,
    ...characters,
    ...score,
  ].includes(null)) {
    return false;
  }

  return playerIds[0] !== playerIds[1] &&
         score[0] !== score[1];
};
