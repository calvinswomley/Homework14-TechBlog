//include '/posts' as the name of one of the routes (referenced in homepage.handlebars)

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('./api', apiRoutes);

module.exports = router;