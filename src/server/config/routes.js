import express from 'express';
import * as players from '../api/players';
import * as games from '../api/games';
import * as characters from '../api/characters';


export default (app) => {
  // API endpoints
  app.get('/api/v1/players', players.all);
  app.get('/api/v1/games', games.all);
  app.post('/api/v1/games', games.add);
  app.get('/api/v1/characters', characters.all);

  // web endpoints
  app.use('*/public', express.static('public'));
  app.use('*', express.static(`${__dirname}/../../../public`));
};
