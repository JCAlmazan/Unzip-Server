// Controllers
const unzipController = require('../controllers/unzip');
const cleanerController = require('../controllers/cleaner');

module.exports = (app) => {
  app.post('/unzip', unzipController.extract);
  app.get('/cleaner/start', cleanerController.start);
  app.get('/cleaner/stop', cleanerController.stop);
  app.get('/cleaner/clean', cleanerController.clean);
};
