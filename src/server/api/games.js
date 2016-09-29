import { MongoClient } from 'mongodb';
import { mapGames, mapPlayers } from '../helpers';


export default null;


export const all = (req, res) => {
  // Connection URL
  const url = process.env.MONGODB_URI;

  // Use connect method to connect to the server
  MongoClient.connect(url, (err, db) => {
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
