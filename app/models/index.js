/* Database */
const { LOCAL_CONNECTION_STRING } = require('../constants/database');
const DataTypes = require('sequelize');

const CONNECTION_STRING = process.env.NODE_ENV === 'dev' ?
        LOCAL_CONNECTION_STRING : process.env.DATABASE_URL;
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
