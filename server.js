const express = require('express');
const app = express();

app.use(require('body-parser').json());

const port = process.env.PORT || 3000;

const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/stoic_dashboard');

const Dashboard = conn.define('dashboard', {
  goal: Sequelize.STRING
});

app.get('/api/dashboards', (req, res, next) => {
  Dashboard.findAll()
    .then(dashboards => res.send(dashboards))
    .catch(next);
});

app.post('/api/dashboards', (req, res, next) => {
  Dashboard.create(req.body)
    .then(dashboard => res.send(dashboard))
    .catch(next);
});

app.put('/api/dashboards/:id', (req, res, next) => {
  Dashboard.findById(req.params.id)
    .then(dashboard => {
      Object.assign(dashboard, req.body);
      return dashboard.save();
    })
    .then(dashboard => res.send(dashboard))
    .catch(next);
});

app.delete('/api/dashboards/:id', (req, res, next) => {
  Dashboard.findById(req.params.id)
    .then(dashboard => {
      return dashboard.destroy();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
});

conn.sync({ force: true })
  .then(() => {
    return Promise.all([
      Dashboard.create({ goal: 'exercise' }),
      Dashboard.create({ goal: 'practice reduce '}),
      Dashboard.create({ goal: 'foo, bar, baz'})
    ]);
  });

app.listen(port, () => console.log(`listening on port ${port}`));
