const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: 'cswomley',
        password: 'password',
    },
    {
        id: 2,
        username: 'niktos',
        password: 'password',
    },
    {
        id: 3,
        username: 'buster',
        password: 'password',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;