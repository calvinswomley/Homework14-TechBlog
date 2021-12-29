const { Post } = require('../models');

const postData = [
    {
        id: 11,
        title: 'Javascript coding is the best.',
        post_content: 'Javascript is the best for 3 reasons: 1. It is fun. 2. It is easy to learn. 3. It is highly versatile.',
        user_id: 1,
        creation_date: 'December 21, 2021 09:00:00',
    },
    {
        id: 12,
        title: 'CSS is the worst.',
        post_content: 'CSS is the worst. It takes forever to learn and websites never look quite right.',
        user_id: 1,
        creation_date: 'December 22, 2021 09:00:00',
    },
    {
        id: 13,
        title: 'SQl tips',
        post_content: 'Youtube has some great tutorials on how to write SQL queries. Sequelize is a great NPM package for SQL.',
        user_id: 2,
        creation_date: 'December 20, 2021 09:00:00',
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;