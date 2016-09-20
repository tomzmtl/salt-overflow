/* Database */
import DataTypes from 'sequelize';
import { forOwn } from 'lodash';
import dotEnv from 'dotenv';

const { DB_PASS, DB_USER, DB_PORT, DB_NAME, DB_HOST } = dotEnv.config();
const CONNECTION_STRING = `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
console.log(CONNECTION_STRING);
const sequelize = new DataTypes(CONNECTION_STRING);

// Database context
const db = {};

/* Models */
db.MODELS = {
  PLAYERS: 'Players',
};

// Import every models
forOwn(db.MODELS, (value) => {
  db[value] = sequelize.import(`./${value}.js`);
});

// Add sequelize to db var
db.DataTypes = DataTypes;
db.sequelize = sequelize;

// -- Associations --
// db.Blah.hasMany(db.Bleh);

export default db;
