/* Database */
const DataTypes = require('sequelize');


const { DB_PASS, DB_USER, DB_PORT, DB_NAME, DB_HOST } = process.env;
const CONNECTION_STRING = `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const sequelize = new DataTypes(CONNECTION_STRING);

/* Utils */
const { forOwn } = require('lodash');

// Database context
const db = {};

/* Models */
db.MODELS = {
  PLAYERS: 'Players',
};

// Import every models
forOwn(db.MODELS, value => {
  db[value] = sequelize.import(`./${value}.js`);
});

// Add sequelize to db var
db.DataTypes = DataTypes;
db.sequelize = sequelize;

// -- Associations --
// db.Blah.hasMany(db.Bleh);

module.exports = db;
