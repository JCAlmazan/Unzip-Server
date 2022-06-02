// const fs = require('fs');
const download = require('download');

// Unzip files given in body and return a json with the content of the files inside each .zip
const extract = async (req, res) => {
  try {
    const { files } = req.body;
    const fileArray = await Promise.all(files.map(async (file) => download(file.url, 'public/', { extract: true })));
    const urlArray = await Promise.all(
      fileArray.map(
        async (file) => Promise.all(file.map(async (f) => `${req.protocol}://${req.get('host')}/${f.path}`)),
      ),
    );
    res.status(200).send(urlArray);
  } catch (ex) {
    res.status(400).send(ex);
  }
};

module.exports = {
  extract,
};
