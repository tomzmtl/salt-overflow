import omit from 'lodash.omit';
import pick from 'lodash.pick';
import characters from '../constants/characters';


export default (games, players) =>
  games.map(game =>
    Object.assign(omit(game, '_id'), {
      players: game.players.map(id => pick(players.find(player =>
        player._id.toString() === id
      ), 'name')),
      characters: game.characters.map(id => omit(characters.find(character =>
        character.id === id
      ), 'id')),
    })
  );
