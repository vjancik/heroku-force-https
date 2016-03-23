const throng = require('throng');
const config = require('./config');
const api = require('./api');

// Heroku dyno auto scaling
function start(id) {
  api.listen(config.PORT, () => {
    console.log(`Started worker ${id}`);
  });

  process.on('SIGTERM', () => {
    console.log(`Worker ${id} exiting`);
    process.exit();
  });
}

throng(start, { workers: config.WORKERS });
