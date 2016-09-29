import characters from '../constants/characters';


export default null;


export const all = (req, res) => {
  res.send(characters);
};
