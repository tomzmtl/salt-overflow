import characters from '../../shared/characters';


export default null;


/**
 * Express middleware. List all characters.
 */
export const all = (req, res) => {
  res.send(characters);
};
