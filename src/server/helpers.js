import Characters from '../shared/characters';


export default null;


export const mapGames = (games, players) =>
  games.map(game => ({
    ...game,
    id: game._id.toString(),
    players: game.players.map(id => players.find(p => p.id === id)),
    characters: game.characters.map(id => Characters.find(c => c.id === id)),
  }));


export const mapPlayers = players =>
  players.map(row => ({
    played_characters: [],
    ...row,
    id: row._id.toString(),
    win_percent: 0,
    games_played: 0,
    sessions_played: 0,
  }));
