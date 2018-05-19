const Sequelize = require('sequelize');
const conn = require('../conn');

const User = conn.define('user', {
  name: Sequelize.STRING,
  birthday: Sequelize.DATE
});

module.exports = User;
