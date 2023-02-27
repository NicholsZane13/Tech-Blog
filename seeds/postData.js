const { Post } = require('../models');

const postData = [
  {
    title: 'I Like To Code',
    post: 'Coding is so much fun!',
    user_id: 1,
  },
  {
    title: 'TypeScript?',
    post: 'TypeScript is scary!',
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;