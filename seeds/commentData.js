const { Comment } = require('../models');

const commentData = [
  {
    comment: 'I love that!',
    post_id: 1,
    user_id: 2,
  },
  {
    comment: 'Yes!',
    post_id: 1,
    user_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;