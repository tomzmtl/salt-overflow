import omit from 'lodash.omit';


export default players =>
  players.map(row => omit(Object.assign(row, {
    played_characters: [],
    win_percent: 0,
    games_played: 0,
    sessions_played: 0,
  }), ['_id']));

