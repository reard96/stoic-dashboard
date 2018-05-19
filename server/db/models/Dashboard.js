const Sequelize = require('sequelize');
const conn = require('../conn');

const Dashboard = conn.define('dashboard', {
  goal: Sequelize.STRING
});

module.exports = Dashboard;
