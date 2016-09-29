import pick from 'lodash.pick';
import omit from 'lodash.omit';
import characters from './constants/characters';


export default null;


export const idfy = obj => Object.assign(
  omit(obj, '_id'),
  {
    id: obj._id.toString(),
  }
);


export const mapGames = (games, players) =>
  games.map(game =>
    Object.assign(
      omit(idfy(game), 'id'),
      {
        players: game.players.map(id => pick(players.find(player =>
          player.id === id
        ), ['name', 'id'])),
        characters: game.characters.map(id => omit(characters.find(character =>
          character.id === id
        ), 'id')),
      }
    )
  );


export const mapPlayers = players =>
  players.map(row => Object.assign(
    {
      played_characters: [],
      win_percent: 0,
      games_played: 0,
      sessions_played: 0,
    },
    idfy(row)
  ));
