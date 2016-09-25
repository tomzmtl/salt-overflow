import { MongoClient } from 'mongodb';
import dotEnv from 'dotenv';
import map from '../players/map';


export default null;


export const all = (req, res) => {
  dotEnv.config();

  // Connection URL
  const url = process.env.MONGODB_URI;

  // Use connect method to connect to the server
  MongoClient.connect(url, (err, db) => {
    const collection = db.collection('players');
    collection.find().toArray().then((r) => {
      res.send(map(r));
    });
    db.close();
  });
};
