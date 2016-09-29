export default null;


export const testReducer = (reducer, before, action, after) => {
  expect(reducer(before, action)).toEqual(after);
};
