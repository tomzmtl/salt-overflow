/* Database */
const DataTypes = require('sequelize');


const { PASSWORD, USERNAME, PORT, DATABASE, HOST } = process.env;
const CONNECTION_STRING = `postgres://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;
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
