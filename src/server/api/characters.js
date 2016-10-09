import characters from '../../shared/characters';


export default null;


export const all = (req, res) => {
  res.send(characters);
};
