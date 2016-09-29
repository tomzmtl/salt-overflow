import games from './games';
import players from './players';
import form from './form';


export default (state, action) => {
  console.log(action.type);
  switch (action.type) {

    case 'RECEIVE_DASHBOARD_DATA':
      return {
        ...state,
        games: games(state.games, action),
        players: players(state.players, action),
      };

    case 'UPDATE_SCORE':
      return {
        ...state,
        form: form(state.form, action),
      };


    default:
      return state;
  }
};
