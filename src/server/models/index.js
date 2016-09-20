/* Database */
import DataTypes from 'sequelize';
import dotEnv from 'dotenv';


const config = process.env.NODE_ENV === 'dev' ? dotEnv.config() : process.env;

const { DB_PASS, DB_USER, DB_PORT, DB_NAME, DB_HOST } = config;
const CONNECTION_STRING = `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const sequelize = new DataTypes(CONNECTION_STRING);

// Database context
const db = {};

/* Models */
const models = ['Players'];

// Import every models
models.forEach((value) => {
  db[value] = sequelize.import(`./${value}.js`);
});

// Add sequelize to db var
db.DataTypes = DataTypes;
db.sequelize = sequelize;

// -- Associations --
// db.Blah.hasMany(db.Bleh);

export default db;
