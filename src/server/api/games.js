import moment from 'moment';
import { MongoClient, ObjectId } from 'mongodb';
import { mapGames, mapPlayers, hydratePlayers, hydrateCharacters } from '../helpers';
import { isFormValid } from '../../shared/helpers';
import Characters from '../../shared/characters';


export default null;


/**
 * Express middleware. List all games.
 */
export const all = (req, res) => {
  // Connect to the DB
  MongoClient.connect(process.env.MONGODB_URI, (err, db) => {
    db.collection('players').find().toArray().then((players) => {
      const query = db.collection('games').find();

      if ('limit' in req.query) {
        query.limit(Number(req.query.limit));
      }

      query.toArray().then((games) => {
        res.send(mapGames(games, mapPlayers(players)));
        db.close();
      });
    });
  });
};


/**
 * Express middleware. Create a new game.
 */
export const add = (req, res) => {
  // prepare data
  const players = [];
  const characters = [];
  const score = [];
  req.body.forEach((player) => {
    players.push(player.player);
    characters.push(player.character);
    score.push(player.score);
  });

  // validate form data
  const valid = isFormValid(players, characters, score);
  if (!valid) {
    res.status(422).send({
      message: 'Invalid data.',
      code: 1,
    });
    return;
  }

  // prepare mongo query
  const dbq = {
    _id: { $in: req.body.map(p => new ObjectId(p.player)) },
  };

  // Connect to the DB
  MongoClient.connect(process.env.MONGODB_URI, (err, db) => {
    db.collection('players').find(dbq).toArray().then((results) => {
      // normalize data
      const allPlayers = mapPlayers(results);

      // validate provided player ids
      if (results.length !== 2) {
        res.status(422).send({
          message: 'Invalid players.',
          code: 2,
        });
        db.close();
        return;
      }

      // prepare payload
      const payload = {
        players,
        characters,
        score,
        session: 0,
        approved: false,
        created_at: moment().format('YYYY-MM-DD HH:mm:SS'),
      };

      // insert game
      db.collection('games').insert(payload).then((r) => {
        if (r.result.ok) {
          const response = {
            ...r.ops[0],
            players: hydratePlayers(players, allPlayers, ['name', 'id']),
            characters: hydrateCharacters(characters, Characters),
          };
          res.status(201).send(response);
          return;
        }
        res.status(500).send();
        db.close();
      });
    });
  });
};
