const app = require('express').Router();

app.use('/dashboards', require('./dashboards'));
app.use('/users', require('./users'));

module.exports = app;
