const conn = require('./conn');
const Dashboard = require('./models/Dashboard');
const User = require('./models/User');

// Relationships between models
Dashboard.belongsTo(User);
User.hasMany(Dashboard);

const sync = () => {
  return conn.sync({ force: true });
};

const seed = () => {
  User.create({
    name: 'Dan Reardon',
    birthday: '5-9-1993 0:00'
  })
  .then(() => {
    return Promise.all([
      Dashboard.create({ goal: 'exercise', userId: 1 }),
      Dashboard.create({ goal: 'practice reduce', userId: 1 }),
      Dashboard.create({ goal: 'foo, bar, baz', userId: 1 })
    ]);
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
