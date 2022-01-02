const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');


//get posts posted by user
  router.get("/", withAuth, async (req, res) => {
    try {
      const getPosts = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ["password"] },
        include: [{ model: Post }],
      });
      const posts = getPosts.get({ plain: true });
      res.status(200).json({
        status: "Success",
        data: posts,
      });
    } catch (err) {
      res.status(500).json({
        status: "Fail",
        message: "Could not get users posts",
      });
    }
  });

  module.exports = router;