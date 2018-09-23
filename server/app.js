const express = require('express');
const logger = require('morgan');
const path = require('path');

const apiRouter = require('./routes/api');
const app = express();
const runningEnv = process.env.NODE_ENV || 'development';

app.use(logger('dev'));
app.use(function(_, res, next) {
  // set CORS for the API calls
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter);

// serve built version of CRA in docker
if (runningEnv === 'production') {
  // serve static assets
  app.use(express.static(path.join(__dirname, '../build')));

  app.get('/', function(_, res) {
    return res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

app.use(function(_, res) {
  // catch-all for other requests. Tell them nothing :D
  return res.sendStatus(500);
});

module.exports = app;
