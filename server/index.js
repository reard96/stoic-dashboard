 const express = require('express');
const path = require('path');
const app = express();

app.use('/api', require('./api/dashboards'));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.use(require('body-parser').json());

const port = process.env.PORT || 3000;

const conn = require('./db/conn');

const Dashboard = require('./db/models/Dashboard');

conn.sync({ force: true })
  .then(() => {
    return Promise.all([
      Dashboard.create({ goal: 'exercise' }),
      Dashboard.create({ goal: 'practice reduce '}),
      Dashboard.create({ goal: 'foo, bar, baz'})
    ]);
  });

app.listen(port, () => console.log(`listening on port ${port}`));
