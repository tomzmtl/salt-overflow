export default (form, action) => {
  switch (action.type) {

    case 'UPDATE_PLAYER': {
      const players = [...form.players];
      players[action.index] = action.player;

      return {
        ...form,
        players,
      };
    }

    case 'UPDATE_CHARACTER': {
      const characters = [...form.characters];
      characters[action.index] = action.character;

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
