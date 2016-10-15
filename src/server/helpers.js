import pick from 'lodash.pick';
import Characters from '../shared/characters';


export default null;


/**
 * Normalize players collection from DB.
 * @param {array} games
 * @param {array} players
 * @return {array}
 */
export const mapGames = (games, players) =>
  games.map(game => ({
    ...game,
    id: game._id.toString(),
    players: game.players.map(id => players.find(p => p.id === id)),
    characters: game.characters.map(id => Characters.find(c => c.id === id)),
  }));


/**
 * Normalize player dataset from DB.
 * @param {array} players
 * @return {array}
 */
export const mapPlayers = players =>
  players.map(row => ({
    played_characters: [],
    ...row,
    id: row._id.toString(),
    win_percent: 0,
    games_played: 0,
    sessions_played: 0,
  }));


/**
 * Maps an array of player ids to a collection of players.
 * @param {array} ids
 * @param {array} players
 * @param {array} keys
 * @return {array}
 */
export const hydratePlayers = (ids, players, keys = []) =>
  ids.map((id) => {
    const player = players.find(p => id === p.id);
    if (player && keys.length) {
      return pick(player, keys);
    }
    return player;
  });


/**
 * Maps an array of character ids to a collection of characters.
 * @param {array} ids
 * @param {array} characters
 * @return {array}
 */
export const hydrateCharacters = (ids, characters) =>
  ids.map(id => characters.find(char => id === char.id));
