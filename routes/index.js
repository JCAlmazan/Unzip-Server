// Controllers
const unzipController = require('../controllers/unzip');
const cleanerController = require('../controllers/cleaner');

module.exports = (app) => {
  app.post('/unzip', unzipController.extract);
  app.get('/cleaner', cleanerController.start);
  app.get('/cleaner', cleanerController.stop);
  app.get('/cleaner', cleanerController.clean);
};
