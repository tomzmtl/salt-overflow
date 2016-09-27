import omit from 'lodash.omit';


export default players =>
  players.map(row => Object.assign(omit(row, '_id'), {
    played_characters: [],
    win_percent: 0,
    games_played: 0,
    sessions_played: 0,
  }));
