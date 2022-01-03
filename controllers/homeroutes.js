const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require("../Config/connection");

//get all
router.get('/', async (req, res) => {
    try {
      // Get all posts and JOIN with creation_date
      const postData = await Post.findAll({
        attributes: ["creation_date"],
      });
  
      // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        posts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Comment,
            attributes: ['comment_content', ],
          }
        ],
      });
  
      const post = postData.get({ plain: true });
  
      res.render('/partial/posts', {
        ...post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Use withAuth middleware to prevent access to route
  router.get('/post', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Post }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('/partial/posts', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login_signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/post');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;