const conn = require('./conn');
const Dashboard = require('./models/Dashboard');

const sync = () => {
  return conn.sync({ force: true });
};

const seed = () => {
  return Promise.all([
    Dashboard.create({ goal: 'exercise' }),
    Dashboard.create({ goal: 'practice reduce '}),
    Dashboard.create({ goal: 'foo, bar, baz'})
  ]);
};

module.exports = {
  conn,
  sync,
  seed,
  models: {
    Dashboard
  }
};
