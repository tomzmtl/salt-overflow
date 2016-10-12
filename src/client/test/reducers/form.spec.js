import { expect } from 'chai';
import reducer from '../../reducers/app';
import { testReducer } from '../utils';


describe('Reducers (form)', () => {
  it('Updates player selection', () => {
    const characters = [
      {
        code: 'shk',
        name: 'Sheik',
        id: 11,
      },
      {
        code: 'jig',
        name: 'Jigglypuff',
        id: 22,
      },
    ];

    const player = {
      id: 5,
    };

    const result = reducer(
      {
        characters,
        form: {
          characters: [null, null],
          players: [null, null],
        },
      },
      {
        type: 'UPDATE_PLAYER',
        index: 0,
        player,
      });

    expect(result.form.players).to.deep.equal([player, null]);
  });

  it('Auto-selects character if favorites are available', () => {
    const favorite = {
      code: 'jig',
      name: 'Jigglypuff',
      id: 22,
    };

    const player = {
      id: 5,
      played_characters: [22, 11],
    };

    const result = reducer(
      {
        form: {
          characters: [null, null],
          players: [null, null],
        },
      },
      {
        type: 'UPDATE_PLAYER',
        index: 0,
        player,
      });

    expect(result.form.characters).to.deep.equal([favorite, null]);
  });

  it('Unselects character if favorites are not available', () => {
    const favorite = {
      code: 'jig',
      name: 'Jigglypuff',
      id: 22,
    };

    const player = {
      id: 5,
      played_characters: [],
    };

    const result = reducer(
      {
        form: {
          characters: [favorite, null],
          players: [3, null],
        },
      },
      {
        type: 'UPDATE_PLAYER',
        index: 0,
        player,
      });

    expect(result.form.characters).to.deep.equal([null, null]);
  });

  it('Empties character selector if selected player is empty', () => {
    const result = reducer(
      {
        form: {
          characters: [
            {
              code: 'jig',
            },
            null,
          ],
          players: [3, null],
        },
      },
      {
        type: 'UPDATE_PLAYER',
        index: 0,
        player: null,
      });

    expect(result.form.characters).to.deep.equal([null, null]);
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
