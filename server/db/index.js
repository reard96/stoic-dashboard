const conn = require('./conn');
const Dashboard = require('./models/Dashboard');
const User = require('./models/User');

const sync = () => {
  return conn.sync({ force: true });
};

const seed = () => {
  return Promise.all([
    Dashboard.create({ goal: 'exercise' }),
    Dashboard.create({ goal: 'practice reduce '}),
    Dashboard.create({ goal: 'foo, bar, baz'})
  ])
  .then(() => {
    User.create({
      name: 'Dan Reardon',
      birthday: '5-9-1993 0:00'
    });
  });
};

module.exports = {
  conn,
  sync,
  seed,
  models: {
    Dashboard,
    User
  }
};
