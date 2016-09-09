/* Utils */
const debug = require('debug')('Players table');

module.exports = function (sequelize, DataTypes) { // eslint-disable-line func-names
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
