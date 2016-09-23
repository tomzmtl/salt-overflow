import results from '../mocks/results';
import players from '../mocks/players';


export default null;


export const all = (req, res) => {
  res.send({ results, players });
};
