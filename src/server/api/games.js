import { MongoClient, ObjectId } from 'mongodb';
import { mapGames, mapPlayers } from '../helpers';
import { isFormValid } from '../../shared/helpers';


export default null;


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


export const add = (req, res) => {
  const players = [];
  const characters = [];
  const score = [];
  req.body.forEach((player) => {
    players.push(player.player);
    characters.push(player.character);
    score.push(player.score);
  });

  const valid = isFormValid(players, characters, score);

  if (!valid) {
    res.status(422).send({
      message: 'Invalid data.',
      code: 1,
    });
    return;
  }

  const dbq = {
    _id: { $in: req.body.map(p => new ObjectId(p.player)) },
  };

  // Connect to the DB
  MongoClient.connect(process.env.MONGODB_URI, (err, db) => {
    db.collection('players').find(dbq).toArray().then((results) => {
      if (results.length !== 2) {
        res.status(422).send({
          message: 'Invalid players.',
          code: 2,
        });
        db.close();
        return;
      }

      // insert game

      res.send({ done: true });
      db.close();
    });
  });
};
