const os = require('os');

module.exports = {
  WORKERS: process.env.WEB_CONCURRENCY || os.cpus().length || 1,
  PORT: process.env.PORT || 5000,
};
