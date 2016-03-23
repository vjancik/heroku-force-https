'use strict';

const express = require('express');
const app = express();

// https redirect middleware
function forceSSL(req, res, next) {
  if (!req.secure) {
    res.redirect(`https://${req.hostname}${req.originalUrl}`);
  } else {
    next();
  }
}

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', true);
  app.use('/auth', forceSSL);
}

app.get('/auth', (req, res) => {
  res.json({ protocol: req.protocol });
});

module.exports = app;
