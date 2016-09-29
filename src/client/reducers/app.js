// import games from './games';
// import players from './players';
import form from './form';


export default (state, action) => {
  switch (action.type) {

    case 'RECEIVE_DASHBOARD_DATA':
      return {
        ...state,
        games: [...action.games],
        players: [...action.players],
        characters: [...action.characters],
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
