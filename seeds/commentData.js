const { Comment } = require('../models');

const commentData = [
    {
        id: 21,
        comment_content: 'I disagree.',
        post_id: 13,
        user_id: 1,
        creation_date: 'December 23, 2021 09:00:00',
    },
    {
        id: 22,
        comment_content: 'But thanks for the post!',
        post_id: 13,
        user_id: 1,
        creation_date: 'December 24, 2021 09:00:00',
    },
    {
        id: 23,
        comment_content: 'Interesting point.',
        post_id: 11,
        user_id: 2,
        creation_date: 'December 25, 2021 09:00:00',
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;