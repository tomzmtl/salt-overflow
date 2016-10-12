export default null;


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
