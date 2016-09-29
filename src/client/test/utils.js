export default null;


export const testReducer = (reducer, before, action, after) =>
  reducer(before, action).counter === after;
