const withAuth = (req, res, next) => {
    // if user not loggedin, redirect request to login route
    if (!req.session.logged_in) {
      res.redirect('/login_signup');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;