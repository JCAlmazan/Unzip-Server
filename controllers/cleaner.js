/* eslint-disable no-console */
const { FileCleaner } = require('cron-file-cleaner');

const tmpWatcher = new FileCleaner('public/', 21600000, '0 */6 * * *', {
  recursive: true,
});

const start = async (req, res) => {
  try {
    tmpWatcher.on('delete', (file) => {
      console.log('DELETE');
      console.log(file.name); // Name of the file
      console.log(file.folder); // folder path
      console.log(file.path); // Full path of the file
    });

    tmpWatcher.on('error', (err) => {
      console.log('ERROR');
      console.error(err);
    });

    tmpWatcher.on('stop', (info) => {
      console.log('STOP');
      console.log(info.path);
      console.log(info.cronTime);
    });

    tmpWatcher.on('start', (info) => {
      console.log('START');
      console.log(info.path);
      console.log(info.cronTime);
    });

    tmpWatcher.start();
    res.status(201).send('ok');
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const stop = async (req, res) => {
  try {
    tmpWatcher.stop();
    res.status(201).send('ok');
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const clean = async (req, res) => {
  try {
    tmpWatcher.cleanUp();
    res.status(201).send('ok');
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

module.exports = {
  start,
  stop,
  clean,
};
