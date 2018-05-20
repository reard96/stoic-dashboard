const app = require('express').Router();
const db = require('../db');
const { Dashboard } = db.models;

module.exports = app;

app.get('/', (req, res, next) => {
  Dashboard.findAll()
    .then(dashboards => res.send(dashboards))
    .catch(next);
});

app.post('/', (req, res, next) => {
  Dashboard.create(req.body)
    .then(dashboard => res.send(dashboard))
    .catch(next);
});

app.put('/:id', (req, res, next) => {
  Dashboard.findById(req.params.id)
    .then(dashboard => {
      Object.assign(dashboard, req.body);
      return dashboard.save();
    })
    .then(dashboard => res.send(dashboard))
    .catch(next);
});

app.delete('/:id', (req, res, next) => {
  Dashboard.findById(req.params.id)
    .then(dashboard => {
      return dashboard.destroy();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
});
