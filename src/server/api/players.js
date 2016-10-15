import { MongoClient } from 'mongodb';
import { mapPlayers } from '../helpers';


export default null;


/**
 * Express middleware. List all players.
 */
export const all = (req, res) => {
  // Connection URL
  const url = process.env.MONGODB_URI;

  // Use connect method to connect to the server
  MongoClient.connect(url, (err, db) => {
    const collection = db.collection('players');
    collection.find().toArray().then((r) => {
      res.send(mapPlayers(r));
    });
    db.close();
  });
};
