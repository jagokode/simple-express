const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// middleware
// create custom middleware
app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

// another middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('', (req, res) => {
  res.sendFile('index.html');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(3000, () => console.log(`Server is listening on port 3000`));
