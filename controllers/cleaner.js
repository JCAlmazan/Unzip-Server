const start = async (req, res) => {
  try {
    res.status(201).send('ok');
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const stop = async (req, res) => {
  try {
    res.status(201).send('ok');
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const clean = async (req, res) => {
  try {
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
