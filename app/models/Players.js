/* Utils */
const debug = require('debug')('Players table');

module.exports = (sequelize, DataTypes) => {
  const Players = sequelize.define('player', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Players.sync().then(() => {
    debug('synced');
  }).catch(() => {
    debug('failed sync');
  });

  return Players;
};
