module.exports = function(app) {
  const players = require('./app/controllers/players');

  app.get('/players', players.findAll);
  app.post('/players', players.add);
  app.get('/players/:id', players.findById);
  app.put('/players/:id', players.update);
  app.delete('/players/:id', players.delete);
};
