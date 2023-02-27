const { User } = require('../models');

const userData = [
  {
    user_name: 'Zane',
    password: 'wefwadwr324fsd',
  },
  {
    user_name: 'Greg',
    password: '234g1231asasdf',
  },
  {
    user_name: 'Blake',
    password: '07bnh22323',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;