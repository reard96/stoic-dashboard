 const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');

app.use(require('body-parser').json());
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/public', express.static(path.join(__dirname, '../public')));

// Routing
app.use('/api', require('./api'));
//app.use('/api/users', require('./api/users'));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

db.sync()
  .then(() => db.seed());

module.exports = app;
