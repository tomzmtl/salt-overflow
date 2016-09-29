import reducer from '../../reducers/app';
import { testReducer } from '../utils';


describe('Reducers (app)', () => {
  it('Receives initial data', () => {
    testReducer(reducer,
      {
        players: [],
        games: [],
        characters: [],
      },
      {
        type: 'RECEIVE_DASHBOARD_DATA',
        players: [1, 2, 3],
        games: [4, 5, 6],
        characters: [7, 8, 9],
      },
      {
        players: [1, 2, 3],
        games: [4, 5, 6],
        characters: [7, 8, 9],
      }
    );
  });
});
