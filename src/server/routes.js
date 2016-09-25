import * as players from './api/players';
import * as multi from './controllers/multi';


export default (app) => {
  /*
  app.get('/players', players.findAll);
  app.post('/players', players.add);
  app.get('/players/:id', players.findById);
  app.put('/players/:id', players.update);
  app.delete('/players/:id', players.deletePlayer);
  */

  app.get('/api/all', multi.all);
  app.get('/api/v1/players', players.all);
};
