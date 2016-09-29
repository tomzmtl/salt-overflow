export default (form, action) => {
  switch (action.type) {

    case 'UPDATE_SCORE': {
      const score = [...form.score];
      score[action.index] = action.score;

      return {
        ...form,
        score,
      };
    }

    default:
      return form;
  }
};
