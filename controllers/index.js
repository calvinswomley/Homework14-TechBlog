//include '/posts' as the name of one of the routes (referenced in homepage.handlebars)

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/', dashboardRoutes);
router.use('./api', apiRoutes);

module.exports = router;