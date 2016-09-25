import { MongoClient } from 'mongodb';
import dotEnv from 'dotenv';
import omit from 'lodash.omit';


export default null;


export const all = (req, res) => {
  dotEnv.config();

  // Connection URL
  const url = process.env.MONGODB_URI;

  // Use connect method to connect to the server
  MongoClient.connect(url, (err, db) => {
    const collection = db.collection('players');
    collection.find().toArray().then((r) => {
      res.send(r.map((row) => {
        return omit(Object.assign(row, {
          played_characters: [],
          win_percent: 0,
          games_played: 0,
          sessions_played: 0,
        }), ['_id']);
      }));
    });
    db.close();
  });
};
