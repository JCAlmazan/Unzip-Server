// Controllers
const unzipController = require('../controllers/unzip');

module.exports = (app) => {
   app.post('/unzip', unzipController.extract);
};