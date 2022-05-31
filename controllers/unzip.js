module.exports = {
  
  // Unzip files given in body and return a json with the content of the files inside each .zip
  async extract(req, res) {
    try {
      res.status(201).send('ok');
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
  }
  
}