import { expect } from 'chai';


export default null;


export const testReducer = (reducer, before, action, after) => {
  expect(reducer(before, action)).to.deep.equal(after);
};
