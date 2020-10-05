const express = require('express');
const app = express();
const port = 3000;
const data = require('./budget-data.json')

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/budget', (req, res) => {
    res.json(data);
});
  
  app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`)
  });

    