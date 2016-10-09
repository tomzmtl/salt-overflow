export default null;


export const mapFavorites = (player, characters) => {
  const ids = 'played_characters' in player ? player.played_characters : [];
  if (ids.length === 0) {
    return ids;
  }
  return ids.map(id => characters.find(c => id === c.id));
};
