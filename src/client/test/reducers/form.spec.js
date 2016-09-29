import reducer from '../../reducers/app';
import { testReducer } from '../utils';


describe('Reducers (form)', () => {
  it('Updates player selection', () => {
    testReducer(reducer,
      {
        form: {
          players: [null, null],
        },
      },
      {
        type: 'UPDATE_PLAYER',
        index: 0,
        player: 5,
      },
      {
        form: {
          players: [5, null],
        },
      }
    );
  });

  it('Updates character selection', () => {
    testReducer(reducer,
      {
        form: {
          characters: [null, null],
        },
      },
      {
        type: 'UPDATE_CHARACTER',
        index: 0,
        character: 8,
      },
      {
        form: {
          characters: [8, null],
        },
      }
    );
  });

  it('Updates score selection', () => {
    testReducer(reducer,
      {
        form: {
          score: [null, null],
        },
      },
      {
        type: 'UPDATE_SCORE',
        index: 1,
        score: 2,
      },
      {
        form: {
          score: [null, 2],
        },
      }
    );
  });

  it('Prevents both players from having a score of 2', () => {
    testReducer(reducer,
      {
        form: {
          score: [1, 2],
        },
      },
      {
        type: 'UPDATE_SCORE',
        index: 0,
        score: 2,
      },
      {
        form: {
          score: [2, null],
        },
      }
    );
  });
});
