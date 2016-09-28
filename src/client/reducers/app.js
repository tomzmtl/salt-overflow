import games from './games';
import players from './players';


export default (state, action) => {
  switch (action.type) {

    case 'RECEIVE_DASHBOARD_DATA':
      return {
        ...state,
        games: games(state.games, action),
        players: players(state.players, action),
      };

    default:
      return state;
  }
};
