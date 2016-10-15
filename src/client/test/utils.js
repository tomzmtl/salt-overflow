import { expect } from 'chai';


export default null;


/**
 * Runs a state object through a reducer and deep compares result to
 * provided comparison object.
 * @param {function} reducer
 * @param {object} before
 * @param {object} action
 * @param {object} after
 * @return {boolean}
 */
export const testReducer = (reducer, before, action, after) => {
  expect(reducer(before, action)).to.deep.equal(after);
};
