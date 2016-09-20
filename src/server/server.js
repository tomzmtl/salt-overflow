import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

const app = express();

/* CONFIGS */
app.use(cors());
app.use(bodyParser.json({
  limit: '50mb',
}));

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',
}));

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port')); // eslint-disable-line no-console
});
/* ------------------------------------------------------------------------------------------ */

/* Allow CORS */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
/* ------------------------------------------------------------------------------------------ */

// Website route
app.use('/', express.static('public'));

app.use('/public', express.static('public'));

console.log(__dirname);

/* ROUTES */
routes(app);
