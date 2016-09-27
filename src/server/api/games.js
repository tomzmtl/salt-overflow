import { MongoClient } from 'mongodb';
import mapGames from '../games/map';


export default null;


export const all = (req, res) => {
  // Connection URL
  const url = process.env.MONGODB_URI;

  // Use connect method to connect to the server
  MongoClient.connect(url, (err, db) => {
    db.collection('players').find().toArray().then((players) => {
      db.collection('games').find().toArray().then((games) => {
        res.send(mapGames(games, players));
        db.close();
      });
    });
  });
};
