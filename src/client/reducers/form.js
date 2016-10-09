import Characters from '../../shared/characters';
import { mapFavorites } from '../helpers.js';


export default (form, action) => {
  switch (action.type) {

    case 'UPDATE_PLAYER': {
      const players = [...form.players];
      players[action.index] = action.player;

      const updated = {
        ...form,
        players,
      };

      const favorites = mapFavorites(action.player, Characters);
      const characters = [...form.characters];
      if (favorites.length) {
        characters[action.index] = favorites[0];
      } else {
        characters[action.index] = null;
      }

      updated.characters = characters;

      return updated;
    }

    case 'UPDATE_CHARACTER': {
      const characters = [...form.characters];
      characters[action.index] = action.character;
      console.log(action);

      return {
        ...form,
        characters,
      };
    }

    case 'UPDATE_SCORE': {
      const score = [...form.score];
      score[action.index] = action.score;

      if (action.score === 2) {
        const altIndex = action.index === 0 ? 1 : 0;
        const altScore = score[altIndex];
        if (altScore === 2) {
          score[altIndex] = null;
        }
      }

      return {
        ...form,
        score,
      };
    }

    default:
      return form;
  }
};
