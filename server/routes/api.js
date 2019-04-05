const express = require('express');
const router = express.Router();
const { log, error } = console;
const fetch = require('node-fetch');
const fs = require('fs');

let HNApiUrl = 'https://hn.algolia.com/api/v1/search?query=';

router.get('/hn/:HNQuery', function(req, res) {
  log(`Received query for ${req.params.HNQuery}. Fetching..`);
  return fetch(HNApiUrl + req.params.HNQuery)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(jsonResponse => {
      log(`Mapping responses.`);

      const searchResults = jsonResponse.hits.map(hit => ({
        title: hit.title,
        created_at: hit.created_at,
        url: hit.url,
        points: hit.points,
      }));

      return res.json(searchResults);
    })
    .catch(err => {
      error(`Error fetching results: ${err.message}`);
      return res.sendStatus(500);
    });
});

// Dinamically loading some routes. Because we can.
fs.readdir(`${__dirname}/blob`, (err, files) => {
  if (err) throw err;

  files.forEach(fileName => {
    const {
      routePath,
      routeMethod,
      routeHandler,
    } = require(`./blob/${fileName}`);

    // register the route
    router[routeMethod](routePath, routeHandler);
  });
});

module.exports = router;
